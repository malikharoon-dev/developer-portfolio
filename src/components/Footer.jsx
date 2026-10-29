import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} {profile.name}. Built as a personal developer portfolio.
      </p>
      <div className="footer-links">
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={16} strokeWidth={1.75} aria-hidden="true" />
          GitHub
        </a>
        {profile.linkedin ? (
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} strokeWidth={1.75} aria-hidden="true" />
            LinkedIn
          </a>
        ) : null}
        <a href="#home">
          Back to top
          <ArrowUp size={16} strokeWidth={1.75} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
