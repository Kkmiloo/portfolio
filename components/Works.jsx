import { works } from '@/app/constants';

import Card from './Card/Card';
import Image from 'next/image';

export default function Works() {
  return (
    <div id='work' className='sm:px-16 px-6 sm:pb-16 pb-10 mx-auto '>
      <div className='mx-auto flex flex-col max-w-7xl py-10 '>
        <p className='font-medium  uppercase'>Trabajo</p>
        <h2 className=' text-[40px]  font-extrabold'>Experiencia.</h2>

        <div className='container mt-7'>
          <div className='flex flex-col md:grid grid-cols-9 mx-auto p-2'>
            {works.reverse().map((work, index) => {
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
