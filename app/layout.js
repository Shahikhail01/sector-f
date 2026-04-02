import { Cormorant_Garamond, Raleway } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata = {
  title: 'Luxury Villa · Sector-F, DHA Phase 1 · Islamabad',
  description:
    'Exclusive 1 Kanal+ luxury villa for sale in Sector-F, DHA Phase 1, Islamabad. 6 bedrooms, G+1+Basement, private natural-reserve garden, 10kW solar, full security. Direct owner sale.',
  keywords: 'DHA Phase 1, Sector-F, Islamabad, luxury villa, 1 kanal, property for sale, DHA property',
  openGraph: {
    title: 'Exclusive Luxury Villa · Sector-F, DHA Phase 1 · Islamabad',
    description: 'A nature-backed sanctuary unlike any other. 1 Kanal+, 6 bedrooms, Mediterranean architecture.',
    images: ['/images/WhatsApp Image 2026-04-02 at 1.48.49 PM.jpeg'],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${raleway.variable}`}>
      <body className="bg-dark text-cream font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
