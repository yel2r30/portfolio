import { useEffect, useRef, useState } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { WorksPage } from "./pages/WorksPage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";
import { LanguageSelector } from "./components/LanguageSelector.jsx";
import { interfaceContent } from "./data/interfaceContent.js";
import { localize, projects } from "./data/projects.js";

function storedTheme() {
  try {
    const value = localStorage.getItem("rin-theme");
    return ["light", "dark"].includes(value) ? value : "system";
  } catch {
    return "system";
  }
}

export function App() {
  const [language, setLanguage] = useState("ko");
  const [theme, setTheme] = useState(storedTheme);
  const [route, setRoute] = useState(() => location.hash.slice(1) || "/");
  const mainRef = useRef(null);
  const content = interfaceContent[language];
  const project = projects.find((item) => route === `/works/${item.slug}`);

  useEffect(() => {
    const navigate = () => {
      const nextRoute = location.hash.slice(1) || "/";
      setRoute(nextRoute);
      mainRef.current?.focus({ preventScroll: true });
      if (nextRoute !== "/contact") window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", navigate);
    return () => window.removeEventListener("hashchange", navigate);
  }, []);
  useEffect(() => {
    if (route === "/contact") {
      document.getElementById("contact")?.scrollIntoView({ block: "start" });
    }
  }, [route]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${project ? localize(project.name, language) : route === "/works" ? "WORKS" : "RIN"} — RIN Portfolio`;
  }, [language, route, project]);
  useEffect(() => {
    const system = window.matchMedia("(prefers-color-scheme: dark)");
    const apply = () => {
      document.documentElement.dataset.theme =
        theme === "system" ? (system.matches ? "dark" : "light") : theme;
    };
    apply();
    system.addEventListener("change", apply);
    try {
      theme === "system"
        ? localStorage.removeItem("rin-theme")
        : localStorage.setItem("rin-theme", theme);
    } catch {
      /* Storage can be unavailable. */
    }
    return () => system.removeEventListener("change", apply);
  }, [theme]);

  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
        }}
      >
        {content.skip}
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a href="#/" className="brand" aria-label="RIN Portfolio HOME">
            RIN<span>Portfolio</span>
          </a>
          <nav aria-label="Main">
            <a href="#/" aria-current={route === "/" ? "page" : undefined}>
              {content.home}
            </a>
            <a
              href="#/works"
              aria-current={route.startsWith("/works") ? "page" : undefined}
            >
              {content.works}
            </a>
            <a href="#/contact" aria-current={route === "/contact" ? "page" : undefined}>
              {content.contactNav}
            </a>
          </nav>
          <div className="preferences">
            <LanguageSelector
              currentLanguage={language}
              label={content.languageLabel}
              onLanguageChange={setLanguage}
            />
            <label className="theme-control">
              <span className="sr-only">{content.themeLabel}</span>
              <select
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
              >
                {["system", "light", "dark"].map((value) => (
                  <option key={value} value={value}>
                    {content[value]}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </header>
      <main id="main" ref={mainRef} tabIndex={-1}>
        {route === "/" || route === "/contact" ? (
          <HomePage language={language} content={content} />
        ) : route === "/works" ? (
          <WorksPage language={language} content={content} />
        ) : project ? (
          <ProjectPage
            project={project}
            language={language}
            content={content}
          />
        ) : (
          <section className="hero">
            <h1>{content.missing}</h1>
            <p>{content.missingText}</p>
            <a href="#/works">{content.back}</a>
          </section>
        )}
      </main>
      <footer className="site-footer">
        <span>{content.footer}</span>
        <a href="#/works">{content.works} ↗</a>
      </footer>
    </>
  );
}
