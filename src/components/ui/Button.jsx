function Button({ children, className = '', variant = 'gold', as: Component = 'button', ...props }) {
  return (
    <Component className={`button button-${variant} ${className}`} {...props}>
      {children}
    </Component>
  )
}

export default Button
