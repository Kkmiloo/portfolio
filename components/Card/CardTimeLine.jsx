import React from 'react';

export default function CardTimeLine({ side }) {
  return (
    <div className='col-start-5 col-end-6 md:mx-auto relative mr-10'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-1 bg-blue-800 pointer-events-none'></div>
      </div>
      <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full  border-blue-500 border-4 bg-white shadow'></div>
    </div>
  );
}
