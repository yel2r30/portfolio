import { localize, projects } from "../data/projects.js";
import {
  focusAreas,
  backgroundHighlights,
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
      <section className="section" aria-labelledby="focus-heading">
        <h2 id="focus-heading">{content.what}</h2>
        <ul className="focus-grid">
          {focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
      <section className="section" aria-labelledby="background-heading">
        <h2 id="background-heading">{content.backgroundHeading}</h2>
        <div className="highlights">
          {backgroundHighlights.map((highlight) => (
            <div className="highlight-row" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <ul>
                {highlight.items.map((item) => (
                  <li key={item.ko}>
                    {item.url ? (
                      <a
                        className="highlight-link"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {localize(item, language)} <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      localize(item, language)
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="section contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">{content.contact}</h2>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              className="contact-link"
              key={link.url}
              href={link.url}
              target={link.url.startsWith("https://") ? "_blank" : undefined}
              rel={link.url.startsWith("https://") ? "noopener noreferrer" : undefined}
            >
              <span className="contact-label">{link.label}</span>
              <span className="contact-value">
                {link.value} <span aria-hidden="true">↗</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
