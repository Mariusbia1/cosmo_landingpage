import { siteImages } from '../../data/siteImages.js'
import ImageWithFallback from '../ui/ImageWithFallback.jsx'

function TrendingNow() {
  return (
    <section className="section trending-section" aria-labelledby="trending-title">
      <div className="trending-visual">
        <ImageWithFallback
          src={siteImages.trending.image}
          alt={siteImages.trending.alt}
          className="trending-image"
          placeholderClassName="trending-placeholder"
        />
      </div>
      <div className="trending-content">
        <h2 id="trending-title">Trending Now</h2>
        <p>Fresh beauty essentials for modern routines, luminous skin, and soft summer looks.</p>
        <a href="#summer">Shop Summer Looks</a>
      </div>
    </section>
  )
}

export default TrendingNow
