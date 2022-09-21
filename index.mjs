const hasParallaxSupport = () =>
  (CSS.supports('-webkit-perspective', '1px') || CSS.supports('perspective', '1px'))
  && !CSS.supports('-webkit-overflow-scrolling', 'touch')

export { hasParallaxSupport }
