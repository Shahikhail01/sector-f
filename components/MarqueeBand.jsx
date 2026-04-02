'use client';

const items = [
  'SECTOR·F', 'DHA PHASE 1', 'ISLAMABAD', '1 KANAL+', 'LUXURY VILLA',
  '6 BEDROOMS', '10kW SOLAR', 'PRIVATE GARDEN', 'NATURAL RESERVE',
];

export default function MarqueeBand() {
  const text = items.map(i => `${i} ✦ `).join('').repeat(4);

  return (
    <div className="bg-dark2 border-y border-gold/15 py-4 overflow-hidden">
      <div className="relative flex">
        <div className="marquee-inner whitespace-nowrap select-none">
          <span className="font-serif text-lg tracking-[0.18em] text-gold/60 italic">
            {text}
          </span>
          {/* duplicate for seamless loop */}
          <span className="font-serif text-lg tracking-[0.18em] text-gold/60 italic" aria-hidden="true">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
}
