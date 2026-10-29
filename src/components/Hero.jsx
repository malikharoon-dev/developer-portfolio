import { ArrowDownRight, Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow animate-in">{profile.role}</p>
        <h1 id="hero-heading" className="animate-in delay-1">
          {profile.headline}
        </h1>
        <p className="lede animate-in delay-2">{profile.subtitle}</p>
        <div className="hero-actions animate-in delay-3">
          <a className="button button-primary" href="#projects">
            View My Projects
            <ArrowDownRight size={18} strokeWidth={1.75} aria-hidden="true" />
          </a>
          <a
            className="button button-ghost"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} strokeWidth={1.75} aria-hidden="true" />
            Visit My GitHub
          </a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="grid-frame">
          <span className="frame-label">stack</span>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
