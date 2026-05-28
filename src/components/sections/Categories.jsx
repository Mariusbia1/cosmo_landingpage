import { categories } from '../../data/categories.js'
import CategoryCard from '../ui/CategoryCard.jsx'

function Categories() {
  return (
    <section className="section categories-section" aria-labelledby="categories-title">
      <h2 className="sr-only" id="categories-title">
        Shop by category
      </h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </section>
  )
}

export default Categories
