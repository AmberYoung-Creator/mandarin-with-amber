import { credibilityPoints } from '../data/siteData'

export function TeachingApproach() {
  return (
    <section className="teaching-approach section" id="teaching-approach" aria-labelledby="teaching-title">
      <div className="teaching-copy">
        <h2 id="teaching-title">Teaching Approach &amp; Credibility</h2>
        <p className="teaching-lead">
          My teaching is structured, practical, and personal. Instead of simply moving through a textbook, I help
          learners connect Chinese with their real situations, goals, work, relationships, interests, and
          self-expression.
        </p>
        <p>
          I have been teaching Mandarin since 2012 and have worked with hundreds of learners, from complete beginners
          to advanced speakers.
        </p>
        <p className="teaching-belief">
          Chinese learning becomes more powerful when it is connected to the learner’s real life.
        </p>
        <ul className="proof-points" aria-label="Experience and credibility">
          {credibilityPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </div>
      <figure className="teaching-image">
        <img
          src="/assets/教学合照.jpeg"
          alt="Amber with international students in a teaching classroom."
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  )
}
