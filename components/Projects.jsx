import { front } from '@/app/assets';
import { headers, projects } from '@/app/constants';
import { LangContext } from '@/src/context/LangContext';

import Image from 'next/image';
import { useContext } from 'react';

export default function Projects() {
  const { lang } = useContext(LangContext);
  return (
    <section
      id='projects'
      className='sm:px-16 px-6 py-10 pb-20 mx-auto relative overflow-auto  border-t-2'
    >
      <div className='mx-auto flex flex-col max-w-7xl py-10 '>
        <h2 className=' text-[40px]  font-extrabold'>
          {headers[lang].projects}
        </h2>
        <p className='text-[20px] pt-5'>
          {`${
            lang == 'es'
              ? `Aquí podrás encontrar algunos de mis proyectos que he realizado como ingeniero multimedia.`
              : `Here you'll find some of the projects I've completed as a multimedia engineer.`
          }`}
        </p>

        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='rounded-xl border border-2-gray shadow p-10 pt-6'
            >
              <div className='h-[230px] w-full mb-5'>
                <Image
                  src={project.image}
                  className='w-full h-full object-cover  rounded-2xl
                '
                  height={230}
                  alt=''
                />
              </div>
              <h2 className='font-bold text-[26px] text-blue-700  mb-4'>
                {project.title}
              </h2>
              <div className=' text-[12px]  flex  gap-x-4   gap-y-2 flex-wrap mb-5'>
                {project.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className={`${tech.colorClass}  shadow rounded-3xl text-white py-1 px-3`}
                  >
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <p className='font-medium mb-4'>{project.description[lang]}</p>

              <div className=' py-1 inline-block'>
                &#128279;
                <a
                  href={project.link}
                  className=' hover:text-blue-600 underline font-bold '
                  target='_blank'
                >
                  {`${lang === 'es' ? 'Ver Proyecto' : 'View Project'}`}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
