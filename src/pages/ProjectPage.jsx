import { localize } from "../data/projects.js";
import { ProjectMedia } from "../components/ProjectMedia.jsx";

function TextList({ items, language }) {
  return (
    <ul className="detail-list">
      {items.map((item, index) => (
        <li key={index}>{localize(item, language)}</li>
      ))}
    </ul>
  );
}

export function ProjectPage({ project, language, content }) {
  const environment =
    typeof project.environment === "string"
      ? project.environment
      : localize(project.environment, language);
  const sections = project.sections || {};
  const links = (project.links || []).filter((link) =>
    /^https?:\/\//.test(link.url),
  );
  return (
    <article className="project-detail">
      <a href="#/works" className="text-link">
        ← {content.back}
      </a>
      <header className="page-heading">
        <p className="eyebrow">{environment}</p>
        <h1>{localize(project.name, language)}</h1>
        <p className="lead">{localize(project.summary, language)}</p>
      </header>
      <ProjectMedia
        key={project.slug}
        project={project}
        language={language}
        placeholder={content.placeholder}
      />
      <section className="detail-section">
        <h2>{content.overview}</h2>
        <div>
          <dl className="facts">
            <div>
              <dt>{content.environment}</dt>
              <dd>{environment}</dd>
            </div>
            <div>
              <dt>{content.team}</dt>
              <dd>{localize(project.team, language)}</dd>
            </div>
            {project.status && (
              <div>
                <dt>{content.status}</dt>
                <dd>{localize(project.status, language)}</dd>
              </div>
            )}
            {project.period && (
              <div>
                <dt>{content.history}</dt>
                <dd>{localize(project.period, language)}</dd>
              </div>
            )}
          </dl>
          {project.history?.length > 0 && (
            <>
              <h3>{content.history}</h3>
              <TextList items={project.history} language={language} />
            </>
          )}
          {project.achievements?.length > 0 && (
            <>
              <h3>{content.achievements}</h3>
              <TextList items={project.achievements} language={language} />
            </>
          )}
        </div>
      </section>
      {(sections.gameplay?.length > 0 || project.images?.length > 0) && (
        <section className="detail-section">
          <h2>{content.gameplay}</h2>
          <div>
            {sections.gameplay?.map((item, index) => (
              <p key={index}>{localize(item, language)}</p>
            ))}
            {project.images?.map((media) => (
              <ProjectMedia
                key={media.src}
                media={media}
                project={project}
                language={language}
                placeholder={content.placeholder}
              />
            ))}
          </div>
        </section>
      )}
      <section className="detail-section">
        <h2>{content.contribution}</h2>
        <div>
          <TextList items={project.roles} language={language} />
          {sections.contribution?.map((item, index) => (
            <p key={index}>{localize(item, language)}</p>
          ))}
        </div>
      </section>
      {["process", "results"]
        .filter((id) => sections[id]?.length)
        .map((id) => (
          <section className="detail-section" key={id}>
            <h2>{content[id]}</h2>
            <div>
              {sections[id].map((item, index) => (
                <p key={index}>{localize(item, language)}</p>
              ))}
            </div>
          </section>
        ))}
      {links.length > 0 && (
        <section className="detail-section">
          <h2>{content.links}</h2>
          <div className="external-links">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {localize(link.label, language)} ↗
              </a>
            ))}
          </div>
        </section>
      )}
      <a href="#/works" className="text-link">
        ← {content.back}
      </a>
    </article>
  );
}
