import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';

const typeDefs = `
  type SentimentData {
    sentiment: Float!
    text: String!
    timestamp: String!
  }

  type AggregatedSentiment {
    overallSentiment: Float!
    sentimentData: [SentimentData!]!
    timestamp: String!
  }

  type Query {
    getBitcoinSentiment: AggregatedSentiment!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
