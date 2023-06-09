import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Provider } from '~/app/provider';
import { Navbar } from '~/components/navbar';

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
        <Provider>
          <Navbar />
          <div className="container">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
