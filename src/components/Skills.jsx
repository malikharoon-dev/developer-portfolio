import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <Reveal>
        <p className="eyebrow">Skills</p>
        <h2 id="skills-heading">Technologies I work with</h2>
        <p className="section-copy">
          These are tools I use while learning and building. This list is editable and is not a claim of professional mastery.
        </p>
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
