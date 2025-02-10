import Sentiment from 'sentiment';

const sentiment = new Sentiment();

const bitcoinRelatedPhrases = [
  'Bitcoin hits new all-time high!',
  'Cryptocurrency market experiences major dip',
  'Institutional investors show increased interest in Bitcoin',
  'Bitcoin mining difficulty reaches record levels',
  'Major company announces Bitcoin integration',
  'Regulatory concerns impact Bitcoin price',
  'Bitcoin adoption grows in developing countries',
  'Experts predict bullish trend for Bitcoin',
  'Bitcoin transaction fees on the rise',
  'New Bitcoin ETF approved by regulators',
  'Bitcoin halving event approaches, market anticipates impact',
  'Lightning Network sees increased adoption for Bitcoin transactions',
  'Bitcoin energy consumption debate intensifies',
  'Major hack impacts cryptocurrency exchange, Bitcoin price affected',
  'Bitcoin dominance in crypto market reaches new levels',
];

export function generateMockTweets(count: number) {
  return Array.from({ length: count }, () => {
    const text =
      bitcoinRelatedPhrases[
        Math.floor(Math.random() * bitcoinRelatedPhrases.length)
      ];
    return {
      text,
      sentiment: sentiment.analyze(text).score,
      timestamp: new Date().toISOString(),
    };
  });
}
