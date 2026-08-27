import { useState } from 'react'
import { navigation } from '../data/landingPageData'
import { CloseIcon, MenuIcon } from './Icon'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" onClick={closeMenu}>Mandarin with Amber</a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="sr-only">{menuOpen ? 'Close navigation' : 'Open navigation'}</span>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.to} href={item.to} onClick={closeMenu}>{item.label}</a>)}
        </nav>
      </div>
    </header>
  )
}
