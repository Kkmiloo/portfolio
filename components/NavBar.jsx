'use client';
import { logo } from '@/app/assets';
import { navLinks, navLinksEn } from '@/app/constants';
import { LangContext } from '@/src/context/LangContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

export default function NavBar() {
  const [active, setActive] = useState('');

  const { lang, setLang } = useContext(LangContext);

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
          <div className='hidden lg:flex lg:gap-x-12 items-center'>
            {navLinks[lang].map((navItem) => (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                className={` ${
                  active == navItem.title ? 'text-[#2863EF]' : 'text-gray-900 '
                } text-sm font-semibold leading-6 hover:text-[#2863EF] flex `}
                onClick={() => setActive(navItem.title)}
              >
                {navItem.title}
              </a>
            ))}

            <div
              className='hover:cursor-pointer flex items-center gap-1 border border-gray-400 rounded-md p-1 px-2 w-28 select-none hover:bg-gray-50 text-base '
              onClick={() => {
                if (lang == 'en') {
                  setLang('es');
                } else {
                  setLang('en');
                }
              }}
            >
              <svg
                className='h-6 w-6 mr-1'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <path
                    d='M19.5 6L18.0333 7.1C17.6871 7.35964 17.2661 7.5 16.8333 7.5H13.475C12.8775 7.5 12.3312 7.83761 12.064 8.37206V8.37206C11.7342 9.03161 11.9053 9.83161 12.476 10.2986L14.476 11.9349C16.0499 13.2227 16.8644 15.22 16.6399 17.2412L16.5936 17.6577C16.5314 18.2177 16.4102 18.7695 16.232 19.304L16 20'
                    stroke='#33363F'
                    stroke-width='2'
                  ></path>{' '}
                  <path
                    d='M2.5 10.5L5.7381 9.96032C7.09174 9.73471 8.26529 10.9083 8.03968 12.2619L7.90517 13.069C7.66434 14.514 8.3941 15.9471 9.70437 16.6022V16.6022C10.7535 17.1268 11.2976 18.3097 11.0131 19.4476L10.5 21.5'
                    stroke='#33363F'
                    stroke-width='2'
                  ></path>{' '}
                  <circle
                    cx='12'
                    cy='12'
                    r='9'
                    stroke='#33363F'
                    stroke-width='2'
                  ></circle>{' '}
                </g>
              </svg>
              <p className=''>{lang === 'en' ? 'English' : 'Español'}</p>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
