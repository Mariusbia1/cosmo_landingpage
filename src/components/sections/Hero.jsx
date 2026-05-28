import { siteImages } from '../../data/siteImages.js'
import Button from '../ui/Button.jsx'

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ '--hero-background': `url(${siteImages.hero.image})` }}
      aria-label={siteImages.hero.alt}
    >
      <div className="hero-content">
        <h1>Reveal Your Inner Radiance.</h1>
        <p>Curated beauty essentials for a natural glow. Shop clean skincare, makeup, and haircare.</p>
        <Button as="a" href="#products">
          Explore All Products
        </Button>
      </div>
    </section>
  )
}

export default Hero
