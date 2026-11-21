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
  const pendingDetails = [
    !sections.process?.length && content.pendingProcess,
    !sections.results?.length && content.pendingResults,
  ].filter(Boolean);
  const links = (project.links || []).filter((link) =>
    /^https?:\/\//.test(link.url),
  );
  return (
    <article className={`project-detail ${project.slug === "orbit" ? "project-detail--orbit" : ""} ${project.slug === "long-tailed-tit" ? "project-detail--long-tailed-tit" : ""} ${project.slug === "trunk" ? "project-detail--trunk" : ""} ${["computer-escape", "grave-shot", "mimic-handle-with-care"].includes(project.slug) ? "project-detail--wide-media" : ""}`}>
      <a href="#/works" className="text-link">
        ← {content.back}
      </a>
      <header className="page-heading">
        <p className="eyebrow">{environment}</p>
        <div className="project-identity">
          {project.icon && (
            <img
              className="project-app-icon project-app-icon--detail"
              src={`${import.meta.env.BASE_URL}${project.icon}`}
              alt=""
              aria-hidden="true"
              width="80"
              height="80"
            />
          )}
          <div className="project-identity-copy">
            <h1>{localize(project.name, language)}</h1>
            <p className="lead">{localize(project.summary, language)}</p>
          </div>
        </div>
      </header>
      <ProjectMedia
        key={project.slug}
        project={project}
        language={language}
        placeholder={content.placeholder}
      />
      {((project.video?.youtubeId && /^[a-zA-Z0-9_-]{11}$/.test(project.video.youtubeId)) ||
        (project.video?.driveId && /^[a-zA-Z0-9_-]{20,}$/.test(project.video.driveId))) && (
        <section className="project-video-section" aria-label={localize(project.video.title, language)}>
          <h2>{localize(project.video.title, language)}</h2>
          <div className="project-video-frame">
            {project.video.driveId ? (
              <iframe
                src={`https://drive.google.com/file/d/${project.video.driveId}/preview`}
                title={localize(project.video.title, language)}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}?rel=0`}
                title={localize(project.video.title, language)}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
          {project.video.caption && (
            <p className="project-video-caption">{localize(project.video.caption, language)}</p>
          )}
          {project.video.driveId && project.video.fallback && (
            <a
              className="project-video-fallback text-link"
              href={`https://drive.google.com/file/d/${project.video.driveId}/view`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {localize(project.video.fallback, language)} ↗
            </a>
          )}
        </section>
      )}
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
            {project.images?.length > 0 && (
              <div className="project-gallery">
                {project.images.map((media) => (
                  <figure className="project-gallery-item" key={media.src}>
                    <ProjectMedia
                      media={media}
                      project={project}
                      language={language}
                      placeholder={content.placeholder}
                    />
                    {media.caption && (
                      <figcaption>{localize(media.caption, language)}</figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      {project.cardShowcase?.length > 0 && (
        <section className="detail-section">
          <h2>{language === "en" ? "Card UI" : "카드 UI"}</h2>
          <div className="card-ui-showcase">
            {project.cardShowcase.map((sample) => (
              <figure className="card-ui-sample" key={sample.frontSrc}>
                <div className="card-ui-images">
                  <img
                    src={`${import.meta.env.BASE_URL}${sample.backSrc}`}
                    alt={localize(sample.backAlt, language)}
                    loading="lazy"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}${sample.frontSrc}`}
                    alt={localize(sample.frontAlt, language)}
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  <strong>{localize(sample.label, language)}</strong>
                  <span>{localize(sample.note, language)}</span>
                </figcaption>
              </figure>
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
      {pendingDetails.length > 0 && (
        <section className="detail-section pending-section">
          <h2>{content.additionalMaterials}</h2>
          <div><p>{pendingDetails.join(" ")}</p></div>
        </section>
      )}
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
