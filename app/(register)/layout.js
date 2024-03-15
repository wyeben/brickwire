import { Inter } from 'next/font/google';
import AuthProvider from '../components/AuthProvider/AuthProvider';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brickwire Properties',
  description: 'Brickwire Properties',
};

export default function RegisterLayout({ children }) {
  return <section className={inter.className}>{children}</section>;
}
