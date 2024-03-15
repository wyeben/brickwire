import Footer from './components/Footer';
import Nav from './components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from './components/AuthProvider/AuthProvider';
import { getServerSession } from 'next-auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brickwire Properties',
  description: 'Brickwire Properties',
  openGraph: {
    title: 'Brickwire Properties',
    description: 'Own a stake in one of our properties with as low as 2.2M Earn up to 15% Annual ROI',
  },
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
