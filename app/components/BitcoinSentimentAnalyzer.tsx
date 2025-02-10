'use client';

import React from 'react';
import { useBitcoinSentiment } from '../hooks/useBitcoinSentiment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, AlertTriangle } from 'lucide-react';

export default function BitcoinSentimentAnalyzer() {
  const { data, loading, error } = useBitcoinSentiment();

  React.useEffect(() => {
    if (data) {
      console.log('GraphQL response data:', data);
    }
    if (error) {
      console.error('GraphQL error:', error);
    }
  }, [data, error]);

  if (loading)
    return (
      <div className='flex justify-center items-center h-64'>
        <Loader2 className='h-8 w-8 animate-spin' />
      </div>
    );

  if (error)
    return (
      <div className='flex flex-col justify-center items-center h-64'>
        <AlertTriangle className='h-8 w-8 text-red-500 mb-2' />
        <p className='text-red-500 font-semibold'>Error: {error.message}</p>
        {error.graphQLErrors?.map(({ message }, i) => (
          <p key={i} className='text-sm text-red-400'>
            GraphQL error: {message}
          </p>
        ))}
        {error.networkError && (
          <p className='text-sm text-red-400'>
            Network error: {error.networkError.message}
          </p>
        )}
      </div>
    );

  if (!data || !data.getBitcoinSentiment) {
    return (
      <div className='flex justify-center items-center h-64'>
        <p>No data available</p>
      </div>
    );
  }

  const { overallSentiment, sentimentData } = data.getBitcoinSentiment;

  return (
    <div className='space-y-8'>
      <Card>
        <CardHeader>
          <CardTitle>Overall Bitcoin Sentiment (Simulated Data)</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={(overallSentiment + 5) * 10} className='w-full' />
          <p className='mt-2 text-center font-semibold'>
            {overallSentiment.toFixed(2)}
          </p>
          <p className='mt-2 text-center text-sm text-gray-500'>
            (-5 to +5 scale, where -5 is very negative and +5 is very positive)
          </p>
        </CardContent>
      </Card>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {sentimentData.map((item: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>Simulated Tweet Sentiment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='mb-2'>{item.text}</p>
              <Progress
                value={(item.sentiment + 5) * 10}
                className='w-full mt-2'
              />
              <p className='mt-1 text-center font-semibold'>
                {item.sentiment.toFixed(2)}
              </p>
              <p className='mt-1 text-center text-xs text-gray-500'>
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
