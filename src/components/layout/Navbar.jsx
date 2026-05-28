import { useState } from 'react'

const navLinks = ['Skincare', 'Makeup', 'Haircare', 'Wellness', 'Brands', 'New Arrivals']

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 21-4.35-4.35M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12l-1 13H7L6 8Zm3 0a3 3 0 0 1 6 0" />
    </svg>
  )
}

function MenuIcon({ isOpen }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {isOpen ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  )
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="/">
        Cosmo
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
            {link}
          </a>
        ))}
        <a className="sale-link" href="#sale">
          Sale
        </a>
      </nav>

      <div className="nav-actions">
        <button className="icon-button" type="button" aria-label="Search">
          <SearchIcon />
        </button>
        <button className="icon-button" type="button" aria-label="Account">
          <UserIcon />
        </button>
        <button className="cart-button" type="button" aria-label="Cart">
          <CartIcon />
          <span>(0)</span>
        </button>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      <nav
        className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}
        id="mobile-menu"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link} onClick={closeMenu}>
            {link}
          </a>
        ))}
        <a className="sale-link" href="#sale" onClick={closeMenu}>
          Sale
        </a>
      </nav>
    </header>
  )
}

export default Navbar
