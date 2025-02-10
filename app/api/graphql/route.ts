import { createYoga, createSchema } from 'graphql-yoga';
import { type NextRequest, NextResponse } from 'next/server';
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
  // Disable graphiql
  graphiql: false,
  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response: NextResponse },
});

async function handler(request: NextRequest) {
  const response = await handleRequest(request, {
    // You can pass more context values here if needed
  });

  // Set CORS headers if needed
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');

  return response;
}

export { handler as GET, handler as POST };
