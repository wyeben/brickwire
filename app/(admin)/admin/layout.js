// import Footer from '../../components/Footer';
import '../../globals.css';
import { Inter } from 'next/font/google';
import Nav2 from '@/app/components/TempAdminNav';
import Nav_admin from './Admin-components/Nav-admin';
import Admin_Nav from './Admin-components/Nav';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Brickwire',
  description: 'Brickwire Properties',
};

export default async function AdminLayout({ children }) {
  return (
    <main className='w-full bg-primary'>
      <div className='w-full grid grid-cols-1 md:grid-cols-6 md:max-h-[100vh] md:overflow-hidden'>
        <Admin_Nav />
        {children}
      </div>
    </main>
  );
}
