import { blogPosts } from '../../data/blogPosts.js'
import BlogCard from '../ui/BlogCard.jsx'

function BlogSection() {
  return (
    <section className="section blog-section" aria-labelledby="blog-title">
      <h2 id="blog-title">The Glow Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}

export default BlogSection
