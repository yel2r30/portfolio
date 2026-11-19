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
        <p className="role">
          <span className="role-label">{content.role}</span>
          {localize(project.cardRole, language) ||
            project.roles.map((role) => localize(role, language)).join(" / ")}
        </p>
        <p className="meta">
          {environment} · {localize(project.team, language)}
        </p>
        {(project.achievements?.length > 0 || project.status) && (
          <p className="card-outcome">
            {localize(project.achievements?.[0] || project.status, language)}
          </p>
        )}
      </div>
    </a>
  );
}
