# Bitcoin Sentiment Analyzer

## Overview

The Bitcoin Sentiment Analyzer is a web application that analyzes the sentiment of Bitcoin-related content. It provides real-time updates on the overall sentiment and displays individual sentiment scores for each piece of content.

## Features

- Real-time sentiment analysis
- Overall sentiment score visualization
- Individual content sentiment breakdown
- Simulated data for demonstration purposes
- Option to use real Twitter data (requires Twitter API access)

## Technologies Used

- Next.js
- React
- TypeScript
- GraphQL (with Apollo Client)
- Tailwind CSS
- shadcn/ui components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Install dependencies:

2. Create a `.env.local` file in the root directory and add the following:
   TWITTER_BEARER_TOKEN=your_twitter_bearer_token_here

   (Note: This is optional if you're using simulated data)

3. Start the development server:
   npm run dev

4. Open your browser and navigate to `http://localhost:3000`

## Using Simulated Data vs. Real Twitter Data

### Simulated Data (Default)

By default, the application uses simulated data to demonstrate the sentiment analysis functionality. This allows you to run the application without needing Twitter API access.

### Using Real Twitter Data

To use real Twitter data:

1. Obtain a Twitter Bearer Token:

- Go to the [Twitter Developer Portal](https://developer.twitter.com/en/portal/dashboard)
- Create a new project and app
- Generate a Bearer Token for your app

2. Add your Twitter Bearer Token to the `.env.local` file:
   TWITTER_BEARER_TOKEN=your_actual_twitter_bearer_token_here

3. Modify the `app/api/graphql/resolvers.ts` file:

- Comment out the import and usage of `generateMockTweets`
- Uncomment and update the `fetchTwitterData` function to use the Twitter API

4. Update the `BitcoinSentimentAnalyzer.tsx` component:

- Remove references to "simulated" or "mock" data in the UI

5. Restart your development server

Note: Be aware of Twitter API rate limits. The free tier has restrictions on the number of requests you can make.

## Project Structure

- `app/`: Contains the main application code
- `api/`: API routes, including GraphQL endpoint
- `components/`: React components
- `hooks/`: Custom React hooks
- `utils/`: Utility functions, including mock data generation
- `public/`: Static assets
- `styles/`: Global styles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
