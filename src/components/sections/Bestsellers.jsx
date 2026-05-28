import { products } from '../../data/products.js'
import ProductCard from '../ui/ProductCard.jsx'

function Bestsellers() {
  return (
    <section className="section bestsellers-section" id="products" aria-labelledby="bestsellers-title">
      <h2 id="bestsellers-title">Our Bestsellers</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  )
}

export default Bestsellers
