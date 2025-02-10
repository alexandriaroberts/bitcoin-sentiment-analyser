import { useQuery, gql } from '@apollo/client';
import type { AggregatedSentiment } from '../types/sentiment';

const GET_BITCOIN_SENTIMENT = gql`
  query GetBitcoinSentiment {
    getBitcoinSentiment {
      overallSentiment
      sentimentData {
        sentiment
        text
        timestamp
      }
      timestamp
    }
  }
`;

interface BitcoinSentimentData {
  getBitcoinSentiment: AggregatedSentiment;
}

export function useBitcoinSentiment() {
  return useQuery<BitcoinSentimentData>(GET_BITCOIN_SENTIMENT, {
    pollInterval: 30000, // Refresh every 30 seconds
    onError: (error) => {
      console.error('Apollo error:', error);
      console.error('Network error:', error.networkError);
      console.error('GraphQL errors:', error.graphQLErrors);
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only', // This ensures we always fetch fresh data
  });
}
