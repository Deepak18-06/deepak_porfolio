import useScrollReveal from '../hooks/useScrollReveal';

// opacity: 0 here is load-bearing — prevents flash-of-visible-content
// before IntersectionObserver fires. The .visible class drives the animation.
export default function Reveal({ children, className = '', style = {} }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}
