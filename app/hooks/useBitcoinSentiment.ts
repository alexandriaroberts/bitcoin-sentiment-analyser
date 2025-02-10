import { useQuery, gql } from '@apollo/client';

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

export function useBitcoinSentiment() {
  return useQuery(GET_BITCOIN_SENTIMENT, {
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
