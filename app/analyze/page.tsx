import BitcoinSentimentAnalyzer from '../components/BitcoinSentimentAnalyzer';

export default function AnalyzePage() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>Bitcoin Sentiment Analysis</h1>
      <BitcoinSentimentAnalyzer />
    </main>
  );
}
