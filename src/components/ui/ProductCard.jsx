import Button from './Button.jsx'
import ImageWithFallback from './ImageWithFallback.jsx'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <ImageWithFallback
        src={product.image}
        alt={product.alt}
        placeholderClassName="product-placeholder"
      />
      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
        <span>★ {product.rating}</span>
      </div>
      <Button>Add to Bag</Button>
    </article>
  )
}

export default ProductCard
