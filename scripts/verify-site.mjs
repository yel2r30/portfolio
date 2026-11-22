import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';
import { projects, localize } from '../src/data/projects.js';
import { interfaceContent } from '../src/data/interfaceContent.js';

const base = 'http://127.0.0.1:4173/portfolio/';
const server = spawn(process.execPath, [
  './node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1',
  '--port', '4173', '--strictPort'
], { stdio: ['ignore', 'pipe', 'pipe'] });
let serverOutput = '';
for (const stream of [server.stdout, server.stderr]) {
  stream.on('data', (chunk) => { serverOutput += String(chunk); });
}
let browser;
const checks = [];
function passed(label) { checks.push(label); console.log('PASS ' + label); }
async function ready() {
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw Error('Preview exited: ' + serverOutput);
    try { if ((await fetch(base)).ok) return; } catch {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw Error('Preview failed to start: ' + serverOutput);
}
async function go(page, route, title) {
  await page.goto(base + '#' + route, { waitUntil: 'domcontentloaded' });
  await page.getByRole('heading', { level: 1, name: title, exact: true })
    .waitFor({ state: 'visible' });
}
async function verify() {
  await ready();
  browser = await chromium.launch({
    channel: 'chrome', headless: true, args: ['--no-sandbox']
  });
  const errors = [];
  const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  desktop.on('pageerror', (e) => errors.push('desktop: ' + e.message));
  await desktop.goto(base, { waitUntil: 'domcontentloaded' });
  await desktop.locator('.selected-grid .project-card').first().waitFor();
  assert.equal(await desktop.locator('.selected-grid .project-card').count(), 3);
  passed('Homepage: 3 selected works');

  await go(desktop, '/works', 'WORKS');
  assert.equal(await desktop.locator('.project-card').count(), projects.length);
  for (const project of projects) {
    const card = desktop.locator('a.project-card[href="#/works/' + project.slug + '"]');
    assert.equal(await card.count(), 1);
    assert.equal(await card.locator('.card-body .role').count(), 1);
    assert.equal(await card.locator('.card-body .meta, .role-label').count(), 0);
    assert.equal(await card.locator('.card-outcome').count(), project.achievements?.length ? 1 : 0);
    assert.ok((await card.locator('.card-body > p').count()) <= 3);
  }
  passed('WORKS: all 13 concise cards and award labels');

  await desktop.locator('.filters button').filter({ hasText: interfaceContent.ko.more }).click();
  assert.equal(await desktop.locator('.project-card').count(), projects.filter((p) => p.category === 'more').length);
  await desktop.locator('.filters button').first().click();
  assert.equal(await desktop.locator('.project-card').count(), projects.length);
  passed('WORKS: category filter');

  await desktop.getByRole('button', { name: 'English' }).click();
  assert.equal(await desktop.locator('html').getAttribute('lang'), 'en');
  await desktop.getByRole('button', { name: '한국어' }).click();
  assert.equal(await desktop.locator('html').getAttribute('lang'), 'ko');
  passed('Language: Korean and English switching');

  for (const project of projects) {
    await go(desktop, '/works/' + project.slug, localize(project.name, 'ko'));
    assert.equal(await desktop.locator('.pending-section').count(), 0);
    assert.equal(await desktop.getByText('상세 기획 및 제작 과정은 정리 중입니다.', { exact: true }).count(), 0);
    assert.equal(await desktop.getByText('결과 및 회고 자료는 준비 중입니다.', { exact: true }).count(), 0);
    const contribution = desktop.locator('.detail-section').filter({
      has: desktop.getByRole('heading', { name: interfaceContent.ko.contribution, exact: true })
    });
    if (project.sections?.contribution?.length) {
      assert.equal(await contribution.locator('.contribution-role').count(), 1, project.slug);
      assert.equal(await contribution.locator('.detail-list').count(), 0, project.slug);
      assert.equal(await contribution.locator('p').count(), project.sections.contribution.length + 1, project.slug);
    } else if (project.roles?.length) {
      assert.equal(await contribution.locator('.detail-list li').count(), project.roles.length, project.slug);
    }
    for (const section of ['process', 'results']) {
      if (!project.sections?.[section]?.length) {
        assert.equal(await desktop.getByRole('heading', { name: interfaceContent.ko[section], exact: true }).count(), 0);
      }
    }
  }
  passed('Details: all 13 project pages, deduplicated roles, no blank pending sections');

  const mobile = await browser.newPage({
    viewport: { width: 390, height: 844 }, deviceScaleFactor: 1,
    isMobile: true, hasTouch: true
  });
  mobile.on('pageerror', (e) => errors.push('mobile: ' + e.message));
  await mkdir('smoke-screenshots', { recursive: true });
  for (const route of ['/', '/works', '/works/orbit', '/works/computer-escape',
                       '/works/trunk', '/works/world-first-kill']) {
    if (route === '/') {
      await mobile.goto(base + '#/', { waitUntil: 'domcontentloaded' });
      await mobile.locator('.hero h1').waitFor();
    } else {
      const slug = route.split('/').pop();
      const title = route === '/works' ? 'WORKS'
        : localize(projects.find((p) => p.slug === slug).name, 'ko');
      await go(mobile, route, title);
    }
    const widths = await mobile.evaluate(() => ({
      full: document.documentElement.scrollWidth,
      visible: document.documentElement.clientWidth
    }));
    assert.ok(widths.full <= widths.visible + 2,
      route + ': horizontal overflow ' + widths.full + ' > ' + widths.visible);
    if (route === '/works') {
      await mobile.screenshot({ path: 'smoke-screenshots/mobile-works.png', fullPage: true });
    }
    if (route === '/works/orbit') {
      await mobile.screenshot({ path: 'smoke-screenshots/mobile-orbit.png', fullPage: true });
    }
  }
  passed('Mobile 390px: homepage, WORKS, four detailed pages have no horizontal overflow');
  assert.deepEqual(errors, []);
  passed('Browser: no unhandled JavaScript errors');
  console.log('SMOKE TESTS: ' + checks.length + ' groups passed');
}
try {
  await verify();
} catch (error) {
  console.error('SMOKE TEST FAILED:', error);
  process.exitCode = 1;
} finally {
  if (browser) await browser.close();
  server.kill('SIGTERM');
}
