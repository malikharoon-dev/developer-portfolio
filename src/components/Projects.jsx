import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <Reveal>
        <p className="eyebrow">Projects</p>
        <h2 id="projects-heading">Featured work</h2>
        <p className="section-copy">
          Sample cards are included so you can see the layout. Replace them in
          {' '}
          <code>src/data/projects.js</code>
          {' '}
          with your own repositories.
        </p>
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
