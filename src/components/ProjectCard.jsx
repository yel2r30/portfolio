import { localize } from "../data/projects.js";
import { ProjectMedia } from "./ProjectMedia.jsx";

export function ProjectCard({ project, language, content, compact = false }) {
  const environment =
    typeof project.environment === "string"
      ? project.environment
      : localize(project.environment, language);
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
          <h3>{localize(project.name, language)}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        <p>{localize(project.summary, language)}</p>
        <p className="meta">
          {environment} · {localize(project.team, language)}
        </p>
        <p className="role">
          {project.roles.map((role) => localize(role, language)).join(" / ")}
        </p>
      </div>
    </a>
  );
}
