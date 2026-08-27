import { Link } from 'react-router-dom'

type PlaceholderPageProps = { title: string }

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main className="placeholder-page section">
      <p className="section-index">Coming next</p>
      <h1>{title}</h1>
      <p>This page is being prepared. Explore the landing page to see Amber’s approach to learning Mandarin.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  )
}
