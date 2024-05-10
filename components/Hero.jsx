import { picture } from '@/app/assets';
import { cv } from '@/app/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='w-full h-[calc(100vh-88px)] min-h-[800px] justify-center pl-12  mx-auto flex flex-col max-w-7xl sm:px-16 px-6 sm:py-16 z-10 pb-8'>
      <div className='flex justify-end pt-5 md:flex-row flex-col items-center'>
        <div className='flex flex-col justify-around pr-4 md:order-1  order-2 pt-4'>
          <div>
            <h1 className='font-bold lg:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mb-3'>
              Hola, soy <span className='text-[#2863EF]'>Camilo Reyes.</span>
            </h1>
            <p className='text-[25px] pb-6 font-medium'>
              Ingeniero Multimedia apasionado por crear soluciones a través del
              desarrollo web.
            </p>
          </div>
          <div className='flex gap-5 justify-between'>
            <div className='flex gap-5 items-center ml-1'>
              <a
                href='https://www.linkedin.com/in/camilo-reyes-granada/'
                target='_blank'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7  fill-black hover:fill-[#2863EF] '
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                </svg>
              </a>

              <a href='https://github.com/Kkmiloo/' target='_blank'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-7 w-7 fill-black hover:fill-[#2863EF] '
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                </svg>
              </a>
            </div>
          </div>
          <div className='mr-10 w-fit mt-6 flex gap-7 flex-col sm:flex-row'>
            <a href={cv[0].url} target='_blank'>
              <div className=' border h-full border-blue-700 p-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex gap-3'>
                <p className='font-semibold break-none'>Download CV</p>
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    <g id='Interface / Download'>
                      <path
                        id='Vector'
                        d='M6 21H18M12 3V17M12 17L17 12M12 17L7 12'
                        stroke='#ffffff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
            </a>

            <a href={`mailto:ca.milo44@hotmail.com`} className='flex'>
              <div className=' p-3 px-4 bg-white box-content hover:bg-blue-50 border-2   border-blue-700 text-blue-700 rounded-md flex gap-3'>
                <p className='font-semibold break-none'>Mail Me!</p>
                <svg
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {' '}
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z'
                      fill='#2863EF'
                    ></path>{' '}
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>

        <Image
          className='rounded-full h-[220px] w-[220px] lg:h-[450px] md:w-[450px] bg-blue-600  md:order-2  order-1'
          src={picture}
          alt='x'
        />
      </div>
    </section>
  );
}
