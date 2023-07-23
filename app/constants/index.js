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
  vivo,
  tracker,
  vivoProto,
} from '@/app/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre mi',
  },
  {
    id: 'work',
    title: 'Experiencia',
  },
  {
    id: 'contact',
    title: 'Contacto',
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
      /*       {
        name: 'Redux Toolkit',
        icon: redux,
      }, */
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
    desc: 'Con conocimientos para desplegar aplicaciones y servicios a la nube.',
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

export const projects = [
  {
    title: 'CRIS UAO',
    image: vivo,
    link: 'https://www.youtube.com/watch?v=wvozyYr3qCE&feature=youtu.be',
    description:
      'Rediseño completo de la interfaz gráfica del software libre y gratuito VIVO, siguiendo los patrones de diseño de la Universidad Autónoma de Occidente. Mi objetivo fue mejorar significativamente la usabilidad del sistema.',
    techs: [
      {
        name: 'HTML, CSS, JS',
        colorClass: 'bg-red-600',
      },
      {
        name: 'Java',
        colorClass: 'bg-blue-600',
      },
      {
        name: 'SPARQL',
        colorClass: 'bg-blue-400',
      },
      {
        name: 'Docker',
        colorClass: 'bg-blue-500',
      },
      {
        name: 'FreeMarker',
        colorClass: 'bg-green-600',
      },
    ],
  },
  {
    title: 'Expense Tracker',
    image: tracker,
    description:
      'Realicé una aplicación donde puedes llevar un registro preciso de tus gastos diarios. ',
    link: 'https://kkmiloo.github.io/Expense-Tracker.github.io/',

    techs: [
      {
        name: 'HTML, CSS, JS',
        colorClass: 'bg-red-600',
      },
      {
        name: 'React',
        colorClass: 'bg-blue-500',
      },
    ],
  },
  {
    title: 'CRIS UAO | Prototipo alta fidelidad',
    image: vivoProto,
    description:
      'Diseño de un prototipo de la UI de CRIS UAO, con el fin de hacer pruebas con los usuarios. ',
    link: 'https://www.figma.com/proto/ofiOvljDfs5LYOJVyAbban/VIVO-UAO?node-id=373-3385&starting-point-node-id=373%3A3385&scaling=scale-down-width&hide-ui=1',
    techs: [
      {
        name: 'Figma',
        colorClass: 'bg-purple-600',
      },
      {
        name: 'Test Usabilidad',
        colorClass: 'bg-red-600',
      },
    ],
  },
];
