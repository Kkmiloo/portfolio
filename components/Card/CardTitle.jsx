import Image from 'next/image';
import React from 'react';

export default function CardTitle({ work }) {
  return (
    <div className='mb-6 flex flex-col lg:flex-row'>
      <div className='mr-5'>
        <Image src={work.image} width={70} height={70} alt={work.company} />
      </div>
      <div>
        <h3 className='font-bold text-[26px] text-blue-700  mb-1'>
          {work.title}
        </h3>
        <h4 className='font-semibold text-[15px] text-gray-500  '>
          {work.company}
        </h4>
      </div>
    </div>
  );
}
