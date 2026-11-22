import { localize } from "../data/projects.js";
import { ProjectMedia } from "./ProjectMedia.jsx";

export function ProjectCard({ project, language, content, compact = false }) {
  return (
    <a
      className={`project-card ${compact ? "compact" : ""}`}
      href={`#/works/${project.slug}`}
    >
      <ProjectMedia
        project={project}
        language={language}
        placeholder={content.placeholder}
      />
      <div className="card-body">
        <div className="card-title">
          <div className="card-name">
            {project.icon && (
              <img
                className="project-app-icon"
                src={`${import.meta.env.BASE_URL}${project.icon}`}
                alt=""
                aria-hidden="true"
                loading="lazy"
              />
            )}
            <h3>{localize(project.name, language)}</h3>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{localize(project.summary, language)}</p>
        <p className="role">
          {localize(project.cardRole, language) ||
            project.roles.map((role) => localize(role, language)).join(" / ")}
        </p>
        {project.achievements?.length > 0 && (
          <p className="card-outcome">
            {localize(project.achievements[0], language)}
          </p>
        )}
      </div>
    </a>
  );
}
