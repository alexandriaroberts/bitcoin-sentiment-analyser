'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '../../lib/apollo-client';
import type React from 'react'; // Added import for React

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
