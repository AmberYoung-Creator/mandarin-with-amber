import { useState } from 'react'
import { ArrowUpRight } from '../components/Icon'
import { courseSteps, courses, experiencePoints } from '../data/landingPageData'

const asset = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`

export function HomePage() {
  const [copyStatus, setCopyStatus] = useState('')
  const copyWeChatId = async () => {
    try {
      await navigator.clipboard.writeText('AmberYoung_Co')
      setCopyStatus('Copied! Paste it into WeChat search.')
    } catch {
      setCopyStatus('Please select and copy AmberYoung_Co above.')
    }
  }

  return (
    <main>
      <section className="hero section" aria-labelledby="hero-title">
        <div className="hero-media">
          <img src={asset('Hero人物照.png')} alt="Amber Young smiling in a portrait." />
        </div>
        <div className="hero-content">
          <p className="intro-name">Hi, I’m Amber.</p>
          <h1 id="hero-title">Learn Mandarin with a system designed for busy professionals.</h1>
          <p className="hero-copy">
            I’m a Chinese teacher, course designer, and your guide to the Mandarin-speaking world.
            Together, we’ll build practical Chinese for your daily life, work, and goals.
          </p>
          <p className="hero-location">Based in Shenzhen · Online &amp; in-person lessons</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Book a trial lesson</a>
            <a className="button button-secondary" href="#courses">Explore courses <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="about section" id="about" aria-labelledby="about-title">
        <div className="about-copy">
          <p className="section-label">About Amber</p>
          <h2 id="about-title">Mandarin teaching grounded in experience.</h2>
          <p className="about-lead">
            I’m a native Mandarin speaker based in Shenzhen, China. I majored in Teaching Chinese as a
            Second Language and have been teaching international learners since 2012.
          </p>
          <p>
            Over the past 12+ years, I’ve helped hundreds of learners speak with confidence—from complete
            beginners to international professionals using Chinese in their work and life in China.
          </p>
          <ul className="proof-points" aria-label="Teaching experience">
            <li>Teaching Mandarin since 2012</li>
            <li>Hundreds of learners taught</li>
            <li>Based in Shenzhen</li>
            <li>Daily, business, and HSK Chinese</li>
          </ul>
        </div>
        <div className="about-gallery" aria-label="Amber teaching international learners">
          <img src={asset('teaching-group-01.jpeg')} alt="Amber taking a group photo with learners seated in a classroom." width="1024" height="768" loading="lazy" />
          <img src={asset('teaching-group-02.jpg')} alt="Amber and learners posing together in a PHBS classroom." width="4032" height="3024" loading="lazy" />
        </div>
      </section>

      <section className="courses section" id="courses" aria-labelledby="courses-title">
        <div className="section-heading">
          <div>
            <p className="section-label">Learning options</p>
            <h2 id="courses-title">Choose the Chinese you need.</h2>
          </div>
          <p>Start with your real situation. Your lessons can then grow with your level, goals, and life.</p>
        </div>
        <div className="course-list">
          {courses.map((course, index) => (
            <article className="course-row" key={course.title}>
              <span className="course-number">0{index + 1}</span>
              <div className="course-summary">
                <h3>{course.title}</h3>
                <p>{course.summary}</p>
              </div>
              <ul>{course.audience.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="path section" aria-labelledby="path-title">
        <div className="section-heading">
          <div>
            <p className="section-label">Your learning path</p>
            <h2 id="path-title">A clear route, tailored to you.</h2>
          </div>
          <p>From an introductory foundation to advanced, real-world communication, the course grows step by step.</p>
        </div>
        <ol className="step-list">
          {courseSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="experience section" id="experience" aria-labelledby="experience-title">
        <div className="experience-media">
          <img src={asset('Human Amber 02.jpeg')} alt="Amber in Shenzhen." />
        </div>
        <div className="experience-content">
          <p className="section-label">Learning experience</p>
          <h2 id="experience-title">Flexible, structured, and personal.</h2>
          <div className="experience-list">
            {experiencePoints.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="contact-copy">
          <p className="section-label">Ready to begin?</p>
          <h2 id="contact-title">Start with a trial lesson.</h2>
          <p>
            We’ll identify your current level, talk about what you want to use Chinese for, and shape a
            personalized course plan around your goals.
          </p>
          <p>Email me or add me on WeChat. Tell me your current level and what you’d like to use Chinese for.</p>
          <a
            className="button button-primary contact-action"
            href="mailto:amberyoung150129@gmail.com?subject=Mandarin%20Trial%20Lesson"
          >
            Email Amber <ArrowUpRight />
          </a>
          <a className="contact-email" href="mailto:amberyoung150129@gmail.com">amberyoung150129@gmail.com</a>
        </div>
        <div className="wechat-contact">
          <img src={asset('Amber-WeChat-QR.jpg')} alt="WeChat QR code for Amber Young." />
          <div>
            <strong>WeChat</strong>
            <span>AmberYoung_Co</span>
          </div>
          <button type="button" className="wechat-copy" onClick={copyWeChatId}>Copy WeChat ID</button>
          <p className="copy-status" role="status">{copyStatus}</p>
        </div>
      </section>
    </main>
  )
}
