import React from 'react';
import CardTitle from './CardTitle';

export default function CardContent({ work, side }) {
  return (
    <>
      <div
        className={`${
          side === 'left' ? 'col-start-1 col-end-5' : 'col-start-6 col-end-10 '
        } p-9 rounded-xl my-4 ml-auto shadow border-2 `}
      >
        <CardTitle work={work} />
        <p className='leading-tight text-justify font-medium'>
          {work.description}
        </p>
        <h4 className='font-bold mt-4'>Responsabilidades: </h4>

        <ul className='list-disc pl-6 mt-6 font-medium'>
          {work.items.map((item) => (
            <li key={item.desc}>{item.desc}</li>
          ))}
        </ul>
        <span className=' mt-5 font-bold  md:hidden block  text-blue-500'>
          {work.dateRange}
        </span>
      </div>
    </>
  );
}
