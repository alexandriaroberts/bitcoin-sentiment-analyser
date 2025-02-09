'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ApiKeyManager() {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    // Implement API key generation logic here
    const newApiKey =
      'generated-api-key-' + Math.random().toString(36).substr(2, 9);
    setApiKey(newApiKey);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Access</CardTitle>
        <CardDescription>
          Manage your API key for programmatic access
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={apiKey}
          readOnly
          placeholder='Your API key will appear here'
        />
      </CardContent>
      <CardFooter>
        <Button onClick={generateApiKey}>Generate New API Key</Button>
      </CardFooter>
    </Card>
  );
}
