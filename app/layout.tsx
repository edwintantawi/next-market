import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Navbar } from '~/components/navbar';
import { ThemeProvider } from '~/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Market',
  description: 'Revolutionize Your Shopping Experience with Next Market!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
