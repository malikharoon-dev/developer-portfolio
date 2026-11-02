
import { ArrowUpRight, Github } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">
          {project.number || 'PROJECT'}
        </span>

        {project.placeholder ? (
          <span className="badge">Coming soon</span>
        ) : (
          <span className="project-indicator" />
        )}
      </div>

      <div className="project-meta">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} strokeWidth={1.75} />
            GitHub
          </a>
        ) : (
          <span className="muted-link">GitHub coming soon</span>
        )}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live demo
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </a>
        ) : null}
      </div>
    </article>
  )
}
