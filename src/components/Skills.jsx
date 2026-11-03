
import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-heading"
    >
      <Reveal>
        <div className="skills-heading">
          <p className="eyebrow">MY TOOLKIT</p>
          <h2 id="skills-heading">
            Skills &amp; <span>Technologies</span>
          </h2>
          <p className="section-copy">
            The languages, tools, and technologies I'm learning
            and using to turn ideas into practical projects.
          </p>
        </div>
      </Reveal>

      <div className="skill-groups">
        {profile.skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 80}>
            <article className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
