export interface SentimentData {
  text: string;
  sentiment: number;
  timestamp: string;
}

export interface AggregatedSentiment {
  overallSentiment: number;
  sentimentData: SentimentData[];
  timestamp: string;
}
