import { localize, projects } from "../data/projects.js";
import {
  designAreas,
  experienceHighlights,
  contactLinks,
} from "../data/designerContent.js";
import { ProjectCard } from "../components/ProjectCard.jsx";

export function HomePage({ language, content }) {
  const selected = projects
    .filter((project) => Number.isFinite(project.homeOrder))
    .sort((a, b) => a.homeOrder - b.homeOrder)
    .slice(0, 3);
  return (
    <>
      <section className="hero">
        <p className="eyebrow">RIN / GAME DESIGNER</p>
        <h1>
          {content.intro.map((line) => (
            <span className="hero-line" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="lead">{content.introText}</p>
        <p className="specialties">
          Gameplay Design · System Design · Prototyping
        </p>
        <a className="text-link" href="#/works">
          {content.allWorks} ↗
        </a>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <h2>{content.selected}</h2>
            <p>{content.selectedText}</p>
          </div>
          <a className="text-link" href="#/works">
            {content.viewAll} ↗
          </a>
        </div>
        <div className="selected-grid">
          {selected.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              language={language}
              content={content}
            />
          ))}
        </div>
        <a className="development-link text-link" href="#/works/just-blocked">
          {content.inProgress} ↗
        </a>
      </section>
      <section className="section">
        <h2>{content.what}</h2>
        <div className="disciplines">
          {designAreas.map((area) => (
            <div key={area.title}>
              <h3>{area.title}</h3>
              <p>{localize(area.description, language)}</p>
              <div className="example-links">
                {area.projects.map((slug) => {
                  const project = projects.find((item) => item.slug === slug);
                  return (
                    <a key={slug} href={`#/works/${slug}`}>
                      {localize(project.name, language)} ↗
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Experience &amp; Highlights</h2>
        <div className="highlights">
          {experienceHighlights.map((highlight) => (
            <div className="highlight-row" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <ul>
                {highlight.items.map((item) => (
                  <li key={item.ko}>{localize(item, language)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="section contact">
        <h2>Behind the Games</h2>
        <p className="about-text">{content.about}</p>
        <div className="contact-links">
          <span>{content.contact}</span>
          {contactLinks.map((link) => (
            <a
              className="text-link"
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
