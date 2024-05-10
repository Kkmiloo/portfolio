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
  s9,
  ts,
  nest,
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
    id: 'projects',
    title: 'Proyectos',
  },
];

export const cv = [
  {
    lang: 'es',
    url: 'https://drive.google.com/file/d/1KpK_ri0Lp-y6e7EEkSdu767Lm6SdLNue/view?usp=sharing',
  },
  {
    lang: 'en',
    url: 'https://drive.google.com/file/d/1uJPg1YYovFSgau09Mx_CDbbAZZkmWg8v/view?usp=drive_link',
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
        name: 'TypeScript',
        icon: ts,
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
        name: 'NestJs',
        icon: nest,
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
        desc: 'Diseñar el sistema multimedia con base a los requerimientos identificados.',
      },
      {
        desc: 'Implementar el sistema multimedia, teniendo en cuenta el diseño realizado.',
      },
      {
        desc: 'Evaluar la implementación del sistema multimedia realizado.',
      },
    ],
    dateRange: 'Junio 2022 - Marzo 2023',
  },
  {
    title: 'Implementation Specialist',
    image: s9,
    company: 'Square9 Softworks',
    description:
      'Como Implementation Specialist en Square 9 Softworks, garanticé una implementación efectiva y exitosa de la suite de software de la empresa para una variedad de clientes.',
    items: [
      {
        desc: 'Gestionar todo el proceso de implementación para garantizar el cumplimiento de los plazos y objetivos del proyecto.',
      },
      {
        desc: 'Adaptar la suite de software de Square 9 a las necesidades únicas de cada cliente.',
      },
      {
        desc: 'Llevar a cabo la instalación y configuración técnica de la suite de software en el entorno del cliente.',
      },
      {
        desc: 'Proporcionar capacitación integral a los usuarios finales sobre cómo utilizar eficazmente la suite de software.',
      },
    ],
    dateRange: 'Septiembre 2023 - Febrero 2024',
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
