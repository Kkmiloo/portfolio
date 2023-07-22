import { services } from '@/app/constants';
import Image from 'next/image';
import React from 'react';

export default function Tech() {
  return (
    <div className='sm:px-16 px-6 sm:py-16 py-10 mx-auto relative -mt-96 text-white'>
      <div className='mx-auto flex flex-col max-w-7xl pt-14 '>
        <h2 className=' text-[40px]  font-extrabold'>
          Tecnologías y herramientas.
        </h2>

        <div className='w-full mt-10 text-black  font-medium flex lg:flex-row flex-col align-middle justify-evenly  bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700'>
          {services.map((service) => (
            <div
              key={service.title}
              className=' lg:last:rounded-r-xl lg:first:rounded-l-xl lg:w-1/3  grow py-10 gap-y-6 px-10  h-100 flex flex-col  items-center border border-gray-200  '
            >
              <Image src={service.icon} width={100} alt={service.title} />
              <h2 className='font-bold text-[20px]'>{service.title}</h2>
              <p className='text-center'> {service.desc}</p>
              <h3 className='font-bold text-[#2863EF]'> Dev Tools </h3>

              <div className='w-full  grid-cols-2 md:grid-cols-3 grid place-items-center gap-y-5 '>
                {service.techs.map((tech) => (
                  <div key={tech.name} className='text-center  h-ful '>
                    <Image
                      src={tech.icon}
                      width={50}
                      height={50}
                      className='m-auto h-full'
                      alt={tech.name}
                    />
                    <p key={tech.name} className='mt-1 font-medium'>
                      {tech.name}{' '}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
