import { useState } from "react";
import { localize, projects, projectGroups } from "../data/projects.js";
import { ProjectCard } from "../components/ProjectCard.jsx";

export function WorksPage({ language, content }) {
  const [filter, setFilter] = useState("all");
  return (
    <>
      <header className="page-heading">
        <p className="eyebrow">PORTFOLIO</p>
        <h1>WORKS</h1>
        <p className="lead">{content.worksIntro}</p>
      </header>
      <div className="filters" role="group" aria-label="WORKS">
        {["all", ...projectGroups.map((group) => group.id)].map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {content[id]}{" "}
            <span className="count">
              {id === "all"
                ? projects.length
                : projects.filter((project) => project.category === id).length}
            </span>
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {projectGroups
          .filter((group) => filter === "all" || filter === group.id)
          .map((group) => (
            <section key={group.id} className="section work-group">
              <div className="section-heading">
                <div>
                  <h2>{group.title}</h2>
                  <p>{localize(group.description, language)}</p>
                </div>
              </div>
              <div
                className={`works-grid ${group.id === "more" ? "more-grid" : ""}`}
              >
                {projects
                  .filter((project) => project.category === group.id)
                  .map((project) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      language={language}
                      content={content}
                      compact={group.id === "more"}
                    />
                  ))}
              </div>
            </section>
          ))}
      </div>
    </>
  );
}
