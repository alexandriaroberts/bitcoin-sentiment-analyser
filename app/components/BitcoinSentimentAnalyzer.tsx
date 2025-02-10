'use client';

import React from 'react';
import { useBitcoinSentiment } from '../hooks/useBitcoinSentiment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
import type { SentimentData, AggregatedSentiment } from '../types/sentiment';

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
        <Loader2 className='h-8 w-8 animate-spin text-primary' />
      </div>
    );

  if (error)
    return (
      <div className='flex flex-col justify-center items-center h-64'>
        <AlertTriangle className='h-8 w-8 text-destructive mb-2' />
        <p className='text-destructive font-semibold'>Error: {error.message}</p>
        {error.graphQLErrors?.map(({ message }, i) => (
          <p key={i} className='text-sm text-destructive'>
            GraphQL error: {message}
          </p>
        ))}
        {error.networkError && (
          <p className='text-sm text-destructive'>
            Network error: {error.networkError.message}
          </p>
        )}
      </div>
    );

  if (!data || !data.getBitcoinSentiment) {
    return (
      <div className='flex justify-center items-center h-64'>
        <p className='text-muted-foreground'>No data available</p>
      </div>
    );
  }

  const { overallSentiment, sentimentData }: AggregatedSentiment =
    data.getBitcoinSentiment;

  return (
    <div className='space-y-8'>
      <Card className='bg-card shadow-lg'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold text-center'>
            Overall Bitcoin Sentiment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-center justify-center mb-4'>
            {overallSentiment >= 0 ? (
              <TrendingUp className='w-12 h-12 text-green-500' />
            ) : (
              <TrendingDown className='w-12 h-12 text-red-500' />
            )}
          </div>
          <Progress
            value={(overallSentiment + 5) * 10}
            className='w-full h-4 bg-secondary'
          />
          <p className='mt-4 text-center font-bold text-2xl text-primary'>
            {overallSentiment.toFixed(2)}
          </p>
          <p className='mt-2 text-center text-sm text-muted-foreground'>
            (-5 to +5 scale, where -5 is very negative and +5 is very positive)
          </p>
        </CardContent>
      </Card>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {sentimentData.map((item: SentimentData, index: number) => (
          <Card
            key={index}
            className='bg-card shadow-md hover:shadow-lg transition-shadow duration-300'
          >
            <CardHeader>
              <CardTitle className='text-lg font-semibold'>
                Tweet Sentiment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='mb-4 text-foreground'>{item.text}</p>
              <Progress
                value={(item.sentiment + 5) * 10}
                className='w-full h-2 bg-secondary'
              />
              <p className='mt-2 text-center font-semibold text-lg'>
                {item.sentiment >= 0 ? (
                  <span className='text-green-500'>
                    {item.sentiment.toFixed(2)}
                  </span>
                ) : (
                  <span className='text-red-500'>
                    {item.sentiment.toFixed(2)}
                  </span>
                )}
              </p>
              <p className='mt-1 text-center text-xs text-muted-foreground'>
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
