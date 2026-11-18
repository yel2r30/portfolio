import { useState } from "react";
import { localize } from "../data/projects.js";

export function ProjectMedia({
  project,
  language,
  placeholder,
  media = project.image,
}) {
  const [failedSource, setFailedSource] = useState(null);
  if (media?.src && failedSource !== media.src) {
    return (
      <img
        className="project-image"
        src={`${import.meta.env.BASE_URL}${media.src.replace(/^\/+/, "")}`}
        alt={localize(media.alt, language) || localize(project.name, language)}
        loading="lazy"
        onError={() => setFailedSource(media.src)}
      />
    );
  }
  return (
    <div
      className="project-placeholder"
      style={{ "--project-color": project.color }}
    >
      <span className="placeholder-name">
        {localize(project.name, language)}
      </span>
      <span className="placeholder-caption">{placeholder}</span>
    </div>
  );
}
