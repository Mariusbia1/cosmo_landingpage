import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { siteImages } from '../../data/siteImages.js'
import Button from '../ui/Button.jsx'
import ImageWithFallback from '../ui/ImageWithFallback.jsx'

const socialLinks = [
  {
    label: 'Facebook',
    href: '#facebook',
    Icon: FaFacebookF,
  },
  {
    label: 'X',
    href: '#x',
    Icon: FaXTwitter,
  },
  {
    label: 'Instagram',
    href: '#instagram',
    Icon: FaInstagram,
  },
  {
    label: 'YouTube',
    href: '#youtube',
    Icon: FaYoutube,
  },
]

const footerLinks = [
  {
    title: 'Shop',
    links: [
      { label: 'Skincare', href: '#skincare' },
      { label: 'Makeup', href: '#makeup' },
      { label: 'Haircare', href: '#haircare' },
      { label: 'Bestsellers', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Brands', href: '#brands' },
      { label: 'Journal', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Shipping', href: '#shipping' },
      { label: 'Returns', href: '#returns' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Legal', href: '#legal' },
    ],
  },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="footer-logo" href="/">
            Cosmo
          </a>
          <p>Clean beauty essentials for soft routines, radiant skin, and everyday care.</p>
          <h2>Follow us @cosmo</h2>
          <div className="social-preview" aria-label="Social gallery">
            {siteImages.social.map((item) => (
              <ImageWithFallback
                src={item.image}
                alt={item.alt}
                placeholderClassName="social-placeholder"
                key={item.image}
              />
            ))}
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {footerLinks.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer-newsletter">
          <h2>Newsletter</h2>
          <p>Early access to launches, rituals, and seasonal edits.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" aria-label="Email address" />
            <Button variant="dark" type="submit">
              Join
            </Button>
          </form>
          <div className="footer-social-icons" aria-label="Social links">
            {socialLinks.map((item) => (
              <a href={item.href} aria-label={item.label} key={item.label}>
                <item.Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Cosmo Beauty</p>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#accessibility">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
