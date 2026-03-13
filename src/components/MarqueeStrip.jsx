import { MARQUEE_ITEMS } from '../data/content';

// Items are duplicated 4x to create a seamless infinite loop.
const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function MarqueeStrip({ reverse = false }) {
  return (
    <div className="marquee-strip">
      <div className={`marquee-track${reverse ? ' marquee-track--reverse' : ''}`}>
        {items.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="sep"></span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
