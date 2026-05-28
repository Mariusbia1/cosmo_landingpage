import ImageWithFallback from './ImageWithFallback.jsx'

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <ImageWithFallback src={post.image} alt={post.alt} placeholderClassName="blog-placeholder" />
      <div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href={post.href}>Read More</a>
      </div>
    </article>
  )
}

export default BlogCard
