import Link from 'next/link';
import { Bitcoin } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 text-white'>
      <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2'>
          <Bitcoin className='h-6 w-6' />
          <span className='text-xl font-bold'>Bitcoin Sentiment Analyzer</span>
        </Link>
        <div className='space-x-4'>
          <Link href='/' className='hover:text-gray-300'>
            Home
          </Link>
          <Link href='/analyze' className='hover:text-gray-300'>
            Analyze
          </Link>
        </div>
      </div>
    </nav>
  );
}
