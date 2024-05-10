import React from 'react';

export default function CardDataRange({ work, side }) {
  return (
    <div
      className={`${
        side === 'left' ? 'col-start-6 col-end-10 ' : 'col-start-3 col-end-5'
      } self-center relative hidden md:block  `}
    >
      <span className='right-4  font-bold relative   text-blue-500'>
        {work.dateRange}
      </span>
    </div>
  );
}
