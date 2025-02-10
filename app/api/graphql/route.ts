import { createYoga, createSchema } from 'graphql-yoga';
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

const schema = createSchema({
  typeDefs,
  resolvers,
});

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
  landingPage: false,
  cors: false,
  logging: {
    debug: (...args) => console.debug(...args),
    info: (...args) => console.info(...args),
    warn: (...args) => console.warn(...args),
    error: (...args) => console.error(...args),
  },
});

export { handleRequest as GET, handleRequest as POST };
