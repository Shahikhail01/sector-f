// All property data centralised here
// Images in public/images/ — referenced as /images/<filename>

export const galleryImages = [
  { src: '/images/WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg',     alt: 'Exterior — Front Facade',            category: 'exterior' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.48.50 PM.jpeg',     alt: 'Exterior — Front View',              category: 'exterior' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.48.50 PM (1).jpeg', alt: 'Exterior — Entrance Approach',       category: 'exterior' },
  { src: '/images/WhatsApp Image 2026-04-02 at 2.39.45 PM.jpeg',     alt: 'Garden — Aerial View',               category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 2.39.45 PM (1).jpeg', alt: 'Garden — Natural Reserve Backdrop',  category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 2.39.45 PM (2).jpeg', alt: 'Garden — Private Sitting Area',      category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 2.39.46 PM.jpeg',     alt: 'Kitchen — Modern Modular',           category: 'interior' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.13 PM.jpeg',     alt: 'Garden — Green Lawn & Patio',        category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.11 PM.jpeg',     alt: 'Outdoor Spaces',                     category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.11 PM (1).jpeg', alt: 'Private Back Garden',                category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.12 PM.jpeg',     alt: 'Garden Detail',                      category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.12 PM (1).jpeg', alt: 'Garden — Stone Pathway',             category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.14 PM.jpeg',     alt: 'Outdoor Living Area',                category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.15 PM.jpeg',     alt: 'Garden — Natural Greenery',          category: 'garden' },
  { src: '/images/WhatsApp Image 2026-04-02 at 1.52.15 PM (1).jpeg', alt: 'Outdoor Seating',                    category: 'garden' },
  { src: '/images/DSCN0186.JPG',   alt: 'Interior — Grand Entrance Foyer',          category: 'interior' },
  { src: '/images/DSCN0187.JPG',   alt: 'Interior — Staircase with Stone Wall',     category: 'interior' },
  { src: '/images/DSCN0188.JPG',   alt: 'Interior — Living Area',                   category: 'interior' },
  { src: '/images/DSCN0189.JPG',   alt: 'Interior — Bedroom',                       category: 'interior' },
  { src: '/images/DSCN0190.JPG',   alt: 'Interior — Lounge',                        category: 'interior' },
  { src: '/images/DSCN0191.JPG',   alt: 'Interior — Hallway',                       category: 'interior' },
  { src: '/images/DSCN0192.JPG',   alt: 'Interior — Islamic Artistry Detail',       category: 'interior' },
  { src: '/images/DSCN0193.JPG',   alt: 'Interior — Study',                         category: 'interior' },
  { src: '/images/DSCN0194.JPG',   alt: 'Interior — Ornate Ceiling',                category: 'interior' },
  { src: '/images/DSCN0195.JPG',   alt: 'Interior — Master Bedroom',                category: 'interior' },
  { src: '/images/DSCN0196.JPG',   alt: 'Interior — Dining Area',                   category: 'interior' },
  { src: '/images/DSCN0197.JPG',   alt: 'Interior — Kitchen Detail',                category: 'interior' },
  { src: '/images/DSCN0198.JPG',   alt: 'Interior — Fireplace',                     category: 'interior' },
  { src: '/images/DSCN0199.JPG',   alt: 'Interior View',                            category: 'interior' },
  { src: '/images/DSCN0200.JPG',   alt: 'Interior — Arched Window',                 category: 'interior' },
  { src: '/images/DSCN0201.JPG',   alt: 'Interior — PVC Double Glazed Windows',     category: 'interior' },
  { src: '/images/DSCN0202.JPG',   alt: 'Interior — Basement Hall',                 category: 'interior' },
  { src: '/images/DSCN0203.JPG',   alt: 'Interior — First Floor Lounge',            category: 'interior' },
  { src: '/images/DSCN0204.JPG',   alt: 'Interior — Lounge with Ornate Ceiling',    category: 'interior' },
];

export const features = [
  {
    icon: '☀',
    title: 'Energy Independence',
    desc: '10kW solar inverter + dedicated solar UPS. Continuous clean power 24/7; zero grid reliance.',
  },
  {
    icon: '🛡',
    title: 'Smart Security',
    desc: 'Phoenix security system, full CCTV, and automatic electric gate — peace of mind around the clock.',
  },
  {
    icon: '❄',
    title: 'Climate Mastery',
    desc: 'Central cooling & central heating plus 4 dedicated inverter ACs — perfect temperature year-round.',
  },
  {
    icon: '🍽',
    title: 'Dual Kitchens',
    desc: 'Fully equipped modern kitchens on both the ground and first floors — ideal for extended families.',
  },
  {
    icon: '🔥',
    title: 'Alfresco & BBQ',
    desc: 'Wood-fire pizza oven, full BBQ space, front & back patios, kitchen garden, and garden fountain.',
  },
  {
    icon: '🪵',
    title: 'Fireplace & Chimney',
    desc: 'A full functioning fireplace with chimney — warmth and elegance for Islamabad\'s crisp winters.',
  },
  {
    icon: '🪟',
    title: 'Premium Windows',
    desc: 'Heavy-duty PVC double-glazed throughout — superior insulation, noise reduction, and security.',
  },
  {
    icon: '💧',
    title: 'Hybrid Water System',
    desc: 'Hybrid geysers independently installed per floor — efficient, instant hot water at every tap.',
  },
];

export const floorPlan = [
  {
    id: 'basement',
    label: 'Basement',
    icon: '◳',
    rooms: [
      { name: 'Drawing Room',  icon: '🛋' },
      { name: 'Dining Room',   icon: '🪑' },
      { name: 'Guest Toilet',  icon: '🚽' },
      { name: 'Store Room',    icon: '📦' },
    ],
    note: 'A generous, well-lit reception space — ideal for formal gatherings, media room, or independent suite.',
  },
  {
    id: 'ground',
    label: 'Ground Floor',
    icon: '⌂',
    rooms: [
      { name: 'Bedroom 1', icon: '🛏' },
      { name: 'Bedroom 2', icon: '🛏' },
      { name: 'Bedroom 3', icon: '🛏' },
      { name: 'Full Kitchen', icon: '🍳' },
      { name: 'Lounge',    icon: '🛋' },
      { name: 'Study',     icon: '📚' },
    ],
    note: 'Three spacious bedrooms, a modern kitchen, comfortable lounge, and a private study. Direct garden access.',
  },
  {
    id: 'first',
    label: 'First Floor',
    icon: '▣',
    rooms: [
      { name: 'Master Bedroom', icon: '🛏' },
      { name: 'Bedroom 2',      icon: '🛏' },
      { name: 'Bedroom 3',      icon: '🛏' },
      { name: 'Full Kitchen',   icon: '🍳' },
      { name: 'Lounge',         icon: '🛋' },
    ],
    note: 'Three generous bedrooms and a complete second kitchen — a fully self-contained living level.',
  },
  {
    id: 'roof',
    label: 'Rooftop',
    icon: '◉',
    rooms: [
      { name: 'Servant Quarter 1', icon: '🏠' },
      { name: 'Servant Quarter 2', icon: '🏠' },
      { name: 'Shared Bathroom',   icon: '🚿' },
      { name: 'Solar Installation', icon: '☀' },
    ],
    note: 'Two independent servant quarters with shared bathroom — completely private from the main residence.',
  },
];

export const stats = [
  { num: 7500,  unit: 'sq ft+', label: 'Total Plot Area', icon: '📐' },
  { num: 6,     unit: 'rooms',  label: 'Bedrooms',         icon: '🛏' },
  { num: 4,     unit: 'levels', label: 'Floors incl. Roof',icon: '🏗' },
  { num: 10,    unit: 'kW',     label: 'Solar Capacity',   icon: '☀' },
  { num: 4,     unit: 'cars',   label: 'Covered Parking',  icon: '🚗' },
  { num: 2,     unit: 'kitchens',label: 'Full Kitchens',   icon: '🍳' },
];
