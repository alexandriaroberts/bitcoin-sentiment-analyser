'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function AuthButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement authentication logic here
    console.log('Authentication submitted');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant='outline'>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? 'Log In' : 'Sign Up'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <Input type='email' placeholder='Email' required />
          <Input type='password' placeholder='Password' required />
          <Button type='submit'>{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </form>
        <Button variant='link' onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? 'Need an account? Sign Up'
            : 'Already have an account? Log In'}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
