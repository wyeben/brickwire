// import { Inter } from 'next/font/google';import { Inter } from 'next/font/google';import AuthProvider from '../components/AuthProvider/AuthProvider';
import '../globals.css';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brickwire Properties | Profile',
  description: 'Brickwire Properties',
};

export default function UserprofileLayout({ children }) {
  return <section className=''>{children}</section>;
}
