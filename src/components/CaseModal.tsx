import { useEffect, useId, useRef } from 'react'
import type { CaseStudy } from '../data/siteData'
import { CloseIcon } from './Icon'

type CaseModalProps = { caseStudy: CaseStudy | null; onClose: () => void }

export function CaseModal({ caseStudy, onClose }: CaseModalProps) {
  const modalRef = useRef<HTMLElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)
  const titleId = useId()

  useEffect(() => {
    if (!caseStudy) return
    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab') return
      const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeydown)
      previousFocusRef.current?.focus()
    }
  }, [caseStudy, onClose])

  if (!caseStudy) return null

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        ref={modalRef}
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-topbar">
          <span>Learning journey</span>
          <button ref={closeButtonRef} className="icon-button" type="button" onClick={onClose}>
            <CloseIcon /> <span>Close</span>
          </button>
        </div>
        <div className="case-modal-content">
          <div>
            <p className="case-goal">Goal: {caseStudy.goal}</p>
            <h2 id={titleId}>{caseStudy.title}</h2>
          </div>
          <div className="case-media-gallery" aria-label={`${caseStudy.title} images`}>
            {caseStudy.media.map((media) => (
              media.src ? (
                <img
                  className="case-detail-media"
                  src={media.src}
                  alt={media.alt}
                  loading="lazy"
                  decoding="async"
                  key={media.label}
                />
              ) : (
                <div className="case-detail-media asset-placeholder" role="img" aria-label={media.alt} key={media.label}>
                  <span>{media.label}</span>
                </div>
              )
            ))}
          </div>
          <div className="case-body">
            {caseStudy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {caseStudy.stagesIntro && <p>{caseStudy.stagesIntro}</p>}
            {caseStudy.stages && <p className="case-stages">{caseStudy.stages}</p>}
            {caseStudy.bodyAfterStages?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="case-takeaway"><strong>What this case shows:</strong> {caseStudy.takeaway}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
