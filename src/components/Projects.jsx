
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading"
    >
      <Reveal>
        <div className="projects-heading">
          <p className="eyebrow">MY WORK</p>

          <h2 id="projects-heading">
            Selected <span>Projects</span>
          </h2>

          <p className="section-copy">
            A collection of projects where I explore programming,
            artificial intelligence, and build practical solutions
            through code.
          </p>
        </div>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
