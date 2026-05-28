import { useState } from 'react'

function ImageWithFallback({ src, alt, className = '', placeholderClassName = '', ...props }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return <div className={`image-placeholder ${placeholderClassName}`} aria-label={alt} />
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      {...props}
    />
  )
}

export default ImageWithFallback
