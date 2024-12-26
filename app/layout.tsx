import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../app/components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HitKit - Employer Branding Platform',
  description: 'Build a stronger employer brand that attracts talent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen bg-white pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}