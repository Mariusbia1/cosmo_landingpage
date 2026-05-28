import ImageWithFallback from './ImageWithFallback.jsx'

function CategoryCard({ category }) {
  return (
    <article className="category-card" id={category.id}>
      <ImageWithFallback src={category.image} alt={category.alt} />
      <h3>{category.name}</h3>
      <a href={category.href}>Shop Now</a>
    </article>
  )
}

export default CategoryCard
