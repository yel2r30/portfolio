import { projects } from "../data/projects.js";
import { ProjectCard } from "../components/ProjectCard.jsx";

export function HomePage({ language, content }) {
  const selected = projects
    .filter((project) => Number.isFinite(project.homeOrder))
    .sort((a, b) => a.homeOrder - b.homeOrder)
    .slice(0, 3);
  return (
    <>
      <section className="hero">
        <p className="eyebrow">RIN / GAME CREATOR</p>
        <h1>{content.intro}</h1>
        <p className="lead">{content.introText}</p>
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
            {content.works} ↗
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
      </section>
      <section className="section">
        <h2>{content.what}</h2>
        <div className="disciplines">
          {["Game Design", "System Design", "UI·UX"].map((title, index) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{content.disciplines[index]}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section contact">
        <h2>{content.contact}</h2>
        <p>{content.contactText}</p>
      </section>
    </>
  );
}
