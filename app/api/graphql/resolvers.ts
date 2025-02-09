import axios from 'axios';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();

const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

async function fetchTwitterData() {
  try {
    const response = await axios.get(
      'https://api.twitter.com/2/tweets/search/recent?query=bitcoin&max_results=20',
      {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      }
    );
    console.log('Twitter API response:', response.data);
    return response.data.data.map((tweet: any) => ({
      text: tweet.text,
      sentiment: sentiment.analyze(tweet.text).score,
      timestamp: new Date().toISOString(), // Twitter API v2 doesn't return created_at by default
    }));
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    throw new Error(
      'Failed to fetch Twitter data: ' + (error as Error).message
    );
  }
}

export const resolvers = {
  Query: {
    getBitcoinSentiment: async () => {
      try {
        const sentimentData = await fetchTwitterData();
        const overallSentiment =
          sentimentData.reduce((sum, item) => sum + item.sentiment, 0) /
          sentimentData.length;

        return {
          overallSentiment,
          sentimentData,
          timestamp: new Date().toISOString(),
        };
      } catch (error) {
        console.error('Error in getBitcoinSentiment:', error);
        throw error;
      }
    },
  },
};
