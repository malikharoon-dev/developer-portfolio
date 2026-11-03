import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <Reveal>
      <div className="about-heading">
  <p className="eyebrow">GET TO KNOW ME</p>
  <h2 id="about-heading">
    Beyond the <span>Code</span>
  </h2>
  <p className="section-copy">
    A little about my journey, interests, and passion for technology.
  </p>
</div>
      </Reveal>

      <div className="about-grid">
        <Reveal delay={80}>
          <p className="about-intro">{profile.about.intro}</p>
        </Reveal>
        <div className="about-body">
          {profile.about.paragraphs.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)} delay={140}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <ul className="interest-list">
              {profile.about.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
