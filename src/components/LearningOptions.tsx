import { Link } from 'react-router-dom'
import { primaryLearningOptions, secondaryLearningLinks } from '../data/siteData'
import { ArrowUpRight } from './Icon'

export function LearningOptions() {
  return (
    <section className="learning-options section" id="learning-options" aria-labelledby="options-title">
      <div className="section-heading">
        <h2 id="options-title">Learning Options</h2>
        <p>Choose the path that feels right for where you are now.</p>
      </div>

      <div className="primary-options">
        {primaryLearningOptions.map((option, index) => (
          <Link
            className={`primary-option primary-option-${index + 1}`}
            to={option.to}
            key={option.to}
          >
            <span>
              <strong>{option.title}</strong>
              <small>{option.description}</small>
            </span>
            <ArrowUpRight />
          </Link>
        ))}
      </div>

      <nav className="secondary-options" aria-label="More ways to explore">
        {secondaryLearningLinks.map((option) => (
          <Link to={option.to} key={option.to}>
            <span>
              <strong>{option.title}</strong>
              <small>{option.description}</small>
            </span>
            <ArrowUpRight />
          </Link>
        ))}
      </nav>
    </section>
  )
}
