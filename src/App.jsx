import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './components/sections/Hero.jsx'
import Categories from './components/sections/Categories.jsx'
import Bestsellers from './components/sections/Bestsellers.jsx'
import TrendingNow from './components/sections/TrendingNow.jsx'
import BlogSection from './components/sections/BlogSection.jsx'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Bestsellers />
        <TrendingNow />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
