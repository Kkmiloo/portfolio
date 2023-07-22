import {
  front,
  back,
  cloud,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  uao,
  azure,
  aws,
  spring,
  java,
  sql,
} from '@/app/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const services = [
  {
    title: 'Frontend ',
    icon: front,
    desc: 'Disfruto creando aplicaciones funcionales y accesibles para los usuarios.',
    techs: [
      {
        name: 'HTML 5',
        icon: html,
      },
      {
        name: 'CSS 3',
        icon: css,
      },
      {
        name: 'JavaScript',
        icon: javascript,
      },
      {
        name: 'React JS',
        icon: reactjs,
      },
      {
        name: 'Redux Toolkit',
        icon: redux,
      },
      {
        name: 'Tailwind CSS',
        icon: tailwind,
      },
    ],
  },
  {
    title: 'Backend ',
    icon: back,
    desc: 'Tengo un gran interés en desarrollar la arquitectura necesaria para aplicaciones.',
    techs: [
      {
        name: 'Node JS',
        icon: nodejs,
      },
      {
        name: 'Java',
        icon: java,
      },
      {
        name: 'Spring Boot',
        icon: spring,
      },
      {
        name: 'MongoDB',
        icon: mongodb,
      },
      {
        name: 'MySQL',
        icon: sql,
      },
    ],
  },
  {
    title: 'Cloud ',
    icon: cloud,
    desc: 'Conocimientos para desplegar aplicaciones y servicios a la nube.',
    techs: [
      {
        name: 'AWS',
        icon: aws,
      },
      {
        name: 'Azure',
        icon: azure,
      },
      {
        name: 'Docker',
        icon: docker,
      },
      {
        name: 'GIT',
        icon: git,
      },
    ],
  },
];

export const overview = {
  description:
    'un apasionado ingeniero multimedia especializado en soluciones creativas a través del desarrollo web.',
};

export const works = [
  {
    title: 'FrontEnd Developer',
    image: uao,
    company: 'Universidad Autónoma de Occidente',
    description:
      'Implementación del open Software VIVO y actualización de la Interfaz de Usuario de acuerdo a los estándares y patrones de diseño de la institución.',
    items: [
      {
        desc: 'Analizar de contexto de los usuarios para identificar los requisitos del proyecto.',
      },
      {
        desc: 'Diseñar el sistema multimedia en base a los requerimientos identificados.',
      },
      {
        desc: 'Implementar el sistema multimedia, teniendo en cuenta el diseño realizado.',
      },
      {
        desc: 'Evaluar la implementación del sistema multimedia realizada.',
      },
    ],
    dateRange: 'Junio 2022 - Marzo 2023',
  },
];
