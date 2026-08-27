import { navigation } from '../data/landingPageData'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a className="brand" href="#top">Mandarin with Amber</a>
        <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.to} href={item.to}>{item.label}</a>)}</nav>
        <p className="footer-note">Based in Shenzhen · Online &amp; in-person lessons</p>
      </div>
    </footer>
  )
}
