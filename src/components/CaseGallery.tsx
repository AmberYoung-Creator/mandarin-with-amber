import { useState } from 'react'
import { caseStudies } from '../data/siteData'
import { ArrowUpRight } from './Icon'
import { CaseModal } from './CaseModal'

export function CaseGallery() {
  const [openCaseSlug, setOpenCaseSlug] = useState<string | null>(null)
  const openCase = caseStudies.find((caseStudy) => caseStudy.slug === openCaseSlug) ?? null

  return (
    <section className="case-section section" id="learning-journeys" aria-labelledby="journeys-title">
      <div className="section-heading case-heading">
        <div>
          <p className="section-index">04</p>
          <h2 id="journeys-title">Real Learning Journeys</h2>
        </div>
        <p>Chinese learning becomes more meaningful when the material grows from a learner’s own curiosity, identity, and experience. These three journeys show how the same principle can take very different forms.</p>
      </div>
      <div className="case-gallery">
        {caseStudies.map((caseStudy, index) => (
          <article className={`case-card case-card-${index + 1}`} key={caseStudy.slug}>
            {caseStudy.media[0].src ? (
              <img
                className="case-card-media"
                src={caseStudy.media[0].src}
                alt={caseStudy.media[0].alt}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="case-card-media asset-placeholder" role="img" aria-label={caseStudy.media[0].alt}>
                <span>{caseStudy.media[0].label}</span>
              </div>
            )}
            <div className="case-card-content">
              <h3>{caseStudy.title}</h3>
              <p className="case-goal">Goal: {caseStudy.goal}</p>
              <p>{caseStudy.journey}</p>
              <p className="case-tag">{caseStudy.tag}</p>
              <button className="text-link" type="button" onClick={() => setOpenCaseSlug(caseStudy.slug)}>
                View case <ArrowUpRight />
              </button>
            </div>
          </article>
        ))}
      </div>
      <CaseModal caseStudy={openCase} onClose={() => setOpenCaseSlug(null)} />
    </section>
  )
}
