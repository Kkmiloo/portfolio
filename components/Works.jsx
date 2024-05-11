import { headers, works } from '@/app/constants';

import Card from './Card/Card';
import Image from 'next/image';
import { useContext } from 'react';
import { LangContext } from '@/src/context/LangContext';

export default function Works() {
  const { lang } = useContext(LangContext);

  return (
    <div id='work' className='sm:px-16 px-6 sm:pb-16 pb-10 mx-auto '>
      <div className='mx-auto flex flex-col max-w-7xl py-10 '>
        <p className='font-medium  uppercase'>{headers[lang].work}</p>
        <h2 className=' text-[40px]  font-extrabold'>
          {headers[lang].experience}
        </h2>

        <div className='container mt-7'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
            {works.map((work, index) => {
              return index % 2 == 0 ? (
                <Card key={index} work={work} side={'left'} />
              ) : (
                <Card key={index} work={work} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
