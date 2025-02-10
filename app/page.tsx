import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <section className='text-center'>
        <h1 className='text-4xl font-bold mb-4'>
          Welcome to Bitcoin Sentiment Analyzer
        </h1>
        <p className='text-xl mb-8'>
          Discover the current sentiment of Bitcoin across news and social media
        </p>
        <Link
          href='/analyze'
          className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center'
        >
          Start Analyzing
          <ArrowRight className='ml-2' />
        </Link>
      </section>

      <section className='mt-16'>
        <h2 className='text-2xl font-bold mb-4'>How It Works</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-green-100 p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-2'>1. Data Collection</h3>
            <p>
              We gather the latest Bitcoin-related news and tweets from reliable
              sources.
            </p>
          </div>
          <div className='bg-green-100  p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-2'>
              2. Sentiment Analysis
            </h3>
            <p>
              Our algorithm analyzes the collected data to determine the overall
              sentiment.
            </p>
          </div>
          <div className='bg-green-100  p-6 rounded-lg shadow'>
            <h3 className='text-xl font-semibold mb-2'>
              3. Results Visualization
            </h3>
            <p>
              We present the analyzed data in an easy-to-understand visual
              format.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
