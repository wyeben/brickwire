import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brickwire Properties',
  description: 'Brickwire Properties',
};

export default async function MainAppLayout({ children }) {
  return (
    <section className=''>
      <Nav />
      {children}
      <Footer />
    </section>
  );
}
