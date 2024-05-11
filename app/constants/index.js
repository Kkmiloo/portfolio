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

export const navLinks = {
  en: [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'work',
      title: 'Experience',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
  ],
  es: [
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
  ],
};

export const cv = {
  es: {
    url: 'https://drive.google.com/file/d/1KpK_ri0Lp-y6e7EEkSdu767Lm6SdLNue/view?usp=sharing',
    download: 'Descargar CV',
    mail: 'Escríbeme!',
  },
  en: {
    url: 'https://drive.google.com/file/d/1uJPg1YYovFSgau09Mx_CDbbAZZkmWg8v/view?usp=drive_link',
    download: 'Download CV',
    mail: 'Mail Me!',
  },
};

export const services = [
  {
    title: 'Frontend ',
    icon: front,
    desc: {
      en: 'I enjoy creating functional and accessible applications for users.',
      es: 'Disfruto creando aplicaciones funcionales y accesibles para los usuarios.',
    },
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
    desc: {
      es: 'Tengo un gran interés en desarrollar la arquitectura necesaria para aplicaciones.',
      en: 'I have a great interest in developing the necessary architecture for applications.',
    },
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
    desc: {
      es: 'Con conocimientos para desplegar aplicaciones y servicios a la nube.',
      en: 'With knowledge to deploy applications and services to the cloud.',
    },
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
  es: {
    description:
      'Ingeniero Multimedia apasionado por crear soluciones a través del desarrollo web.',
    about: `Mi enfoque se basa en la fusión de la tecnología para crear experiencias digitales únicas y atractivas. Creo firmemente que cada desafío trae consigo una oportunidad para innovar y superar las expectativas de los usuarios.`,
    about2:
      'Te invito a explorar mi portafolio para descubrir cómo mis soluciones multimedia pueden agregar valor a tu proyecto.',
  },
  en: {
    description:
      'Multimedia engineer passionate about creating solutions through web development.',
    about:
      'My approach is based on the fusion of technology to create unique and engaging digital experiences. I firmly believe that every challenge brings with it an opportunity to innovate and exceed user expectations.',
    about2:
      'I invite you to explore my portfolio to discover how multimedia solutions can add value to your project.',
  },
};
const work = [
  {
    title: 'FrontEnd Developer',
    image: uao,
    company: 'Universidad Autónoma de Occidente',
    description: {
      es: 'Implementación del open Software VIVO y actualización de la Interfaz de Usuario de acuerdo a los estándares y patrones de diseño de la institución.',
      en: 'Implementation of the VIVO open Software and updating of the User Interface according to the standards and design patterns of the institution.',
    },
    items: [
      {
        desc: {
          es: 'Analizar el contexto de los usuarios para identificar los requisitos del proyecto.',
          en: 'Analyze user context to identify project requirements.',
        },
      },
      {
        desc: {
          es: 'Diseñar el sistema multimedia basado en los requisitos identificados.',
          en: 'Design the multimedia system based on the identified requirements.',
        },
      },
      {
        desc: {
          es: 'Implementar el sistema multimedia, teniendo en cuenta el diseño realizado.',
          en: 'Implement the multimedia system, taking into account the design.',
        },
      },
      {
        desc: {
          es: 'Evaluar la implementación del sistema multimedia realizada.',
          en: 'Evaluate the implemented multimedia system.',
        },
      },
    ],
    dateRange: {
      es: 'Junio 2022 - Marzo 2023',
      en: 'June 2022 - March 2023',
    },
  },
  {
    title: 'Implementation Specialist',
    image: s9,
    company: 'Square9 Softworks',
    description: {
      es: 'Como Especialista en Implementación en Square 9 Softworks, aseguré una implementación efectiva y exitosa de la suite de software de la empresa para una variedad de clientes.',
      en: "As an Implementation Specialist at Square 9 Softworks, I ensured effective and successful implementation of the company's software suite for a variety of clients.",
    },
    items: [
      {
        desc: {
          es: 'Gestionar todo el proceso de implementación para garantizar el cumplimiento de los plazos y objetivos del proyecto.',
          en: 'Manage the entire implementation process to ensure compliance with project deadlines and objectives.',
        },
      },
      {
        desc: {
          es: 'Adaptar la suite de software de Square 9 a las necesidades únicas de cada cliente.',
          en: "Tailor Square 9's software suite to the unique needs of each client.",
        },
      },
      {
        desc: {
          es: 'Llevar a cabo la instalación y configuración técnica de la suite de software en el entorno del cliente.',
          en: "Perform installation and technical configuration of the software suite in the client's environment.",
        },
      },
      {
        desc: {
          es: 'Proporcionar capacitación integral a los usuarios finales sobre cómo utilizar eficazmente la suite de software.',
          en: 'Provide comprehensive training to end users on how to effectively use the software suite.',
        },
      },
    ],
    dateRange: {
      es: 'Septiembre 2023 - Febrero 2024',
      en: 'September 2023 - February 2024',
    },
  },
];

export const works = work.reverse();

export const projects = [
  {
    title: 'CRIS UAO',
    image: vivo,
    link: 'https://www.youtube.com/watch?v=wvozyYr3qCE&feature=youtu.be',

    description: {
      es: 'Rediseño completo de la interfaz gráfica del software libre y gratuito VIVO, siguiendo los patrones de diseño de la Universidad Autónoma de Occidente. Mi objetivo fue mejorar significativamente la usabilidad del sistema.',
      en: 'Complete redesign of the user interface of the free and open-source software VIVO, following the design patterns of Universidad Autónoma de Occidente. My goal was to significantly improve the usability of the system.',
    },

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
    description: {
      es: 'Realicé una aplicación donde puedes llevar un registro preciso de tus gastos diarios.',
      en: 'I created an application where you can keep an accurate record of your daily expenses.',
    },
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
    description: {
      es: 'Diseño de un prototipo de la interfaz de usuario de CRIS UAO, con el fin de realizar pruebas con los usuarios.',
      en: 'Design of a prototype of the UI for CRIS UAO, in order to conduct user testing.',
    },
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

export const headers = {
  en: {
    about: 'About me',
    overview: 'Overview.',
    techs: 'Techs and tools',
    work: 'Work',
    experience: 'Experience.',
    projects: 'Projects.',
  },
  es: {
    about: 'Sobre mi',
    overview: 'Resumen.',
    techs: 'Tecnologías y herramientas',
    work: 'Trabajo',
    experience: 'Experiencia.',
    projects: 'Proyectos.',
  },
};
