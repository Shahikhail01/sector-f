'use client';
import dynamic from 'next/dynamic';

// Lazy-load all heavy client components to keep initial bundle lean
const Cursor       = dynamic(() => import('@/components/Cursor'),       { ssr: false });
const Loader       = dynamic(() => import('@/components/Loader'),       { ssr: false });
const Navbar       = dynamic(() => import('@/components/Navbar'),       { ssr: false });
const Hero         = dynamic(() => import('@/components/Hero'),         { ssr: false });
const MarqueeBand  = dynamic(() => import('@/components/MarqueeBand'),  { ssr: false });
const Overview     = dynamic(() => import('@/components/Overview'),     { ssr: false });
const Stats        = dynamic(() => import('@/components/Stats'),        { ssr: false });
const Features     = dynamic(() => import('@/components/Features'),     { ssr: false });
const Gallery      = dynamic(() => import('@/components/Gallery'),      { ssr: false });
const VideoTour    = dynamic(() => import('@/components/VideoTour'),    { ssr: false });
const FloorPlan    = dynamic(() => import('@/components/FloorPlan'),    { ssr: false });
const Outdoor      = dynamic(() => import('@/components/Outdoor'),      { ssr: false });
const Location     = dynamic(() => import('@/components/Location'),     { ssr: false });
const Contact      = dynamic(() => import('@/components/Contact'),      { ssr: false });
const Footer       = dynamic(() => import('@/components/Footer'),       { ssr: false });
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat'), { ssr: false });

export default function Page() {
  return (
    <div className="grain">
      <Loader />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <MarqueeBand />
        <Overview />
        <Stats />
        <Features />
        <Gallery />
        <VideoTour />
        <FloorPlan />
        <Outdoor />
        <Location />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
