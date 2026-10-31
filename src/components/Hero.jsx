
import { ArrowDownRight, Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="hero hero-centered" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy hero-copy-centered">
        <p className="hero-status animate-in">
          <span className="status-dot" />
          BS ARTIFICIAL INTELLIGENCE STUDENT · UMT LAHORE
        </p>

        <h1 id="hero-heading" className="hero-name animate-in delay-1">
          Haroon <span>Malik</span>
        </h1>

        <p className="lede hero-description animate-in delay-2">
          Building intelligent applications, exploring artificial intelligence,
          and turning ideas into practical software solutions.
        </p>

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

      <a className="hero-scroll" href="#about">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDownRight size={16} aria-hidden="true" />
      </a>
    </section>
  )
}
