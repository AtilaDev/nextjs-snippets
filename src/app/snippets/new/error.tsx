'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-xl font-bold'>{error.message}</h1>
    </div>
  );
}
