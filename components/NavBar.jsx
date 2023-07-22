import { logo } from '@/app/assets';
import { navLinks } from '@/app/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <>
      <header className='bg-white sticky top-0  shadow z-30'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5 flex flex-row'>
              <span className='sr-only'>Camilo Reyes | Dev</span>
              <Image
                className='w-auto'
                src={logo}
                alt='Camilo Dev logo'
                width={64}
                height={64}
              />
              <span className='font-semibold flex items-center'>
                Camilo Portfolio
              </span>
            </a>
          </div>
          <div className='flex lg:hidden'></div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navLinks.map((navItem) => (
              <a
                key={navItem.id}
                href={`#${navItem.title}`}
                className='text-sm font-semibold leading-6 text-gray-900  hover:text-[#2863EF]'
              >
                {navItem.title}
              </a>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}
