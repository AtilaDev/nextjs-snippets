import { db } from '@/db';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id}>
        <h1 className='font-bold mb-2 mt-2'>{snippet.title}</h1>
        <code className='font-mono text-xs p-2 border border-slate-500 bg-slate-100 rounded'>
          {snippet.code}
        </code>
        <hr className='my-6' />
      </div>
    );
  });

  return <div>{renderedSnippets}</div>;
}
