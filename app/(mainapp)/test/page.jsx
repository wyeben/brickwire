'use client';
import { NavStore } from '@/Store/store';

export default function page() {
  const counter = NavStore((state) => state.counter);
  const increment = NavStore((state) => state.setCounter);

  return (
    <div className='pt-[15vh]'>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
