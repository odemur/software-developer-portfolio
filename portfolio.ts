import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Odemur Marangoni',
  title: "Senior Software Developer",
  description:
    'I\'m passionate Software Developer having an experience of web applications with React.js, Next.js, Node and Java. I\'m also a Cyber Security enthusiast and a Certified Ethical Hacker.',
  resumeLink:
    'https://odemur.com.br/senior-software-developer.pdf',
};

export const openSource = {
  githubUserName: 'odemur',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/odemur/',
  github: 'https://github.com/odemur',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Highly focused on exploring the best of each technology stack.',
  data: [
    {
      title: 'Software Developer',
      lottieAnimationFile: '/lottie/developer.json',
      skills: [
        'Building responsive Single-Page-Apps (SPA) & PWA in React.js.',
        'Building responsive static websites using Next.js.',
        'Building RESTful APIs in Node.js and Java.',
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'React',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Next',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Node',
          iconifyTag: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Java',
          iconifyTag: 'vscode-icons:file-type-java',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/cloud.json',
      skills: [
        'Experience of working on multiple cloud platforms.',
        'Hosting and maintaining web applications.',
        'Building CI/CD pipelines.',
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend',
    progressPercentage: '95',
  },
  {
    Stack: 'Backend',
    progressPercentage: '75',
  },
  {
    Stack: 'Agile Development',
    progressPercentage: '90',
  },
  {
    Stack: 'Software Architecture',
    progressPercentage: '70',
  },
  {
    Stack: 'Cyber Security',
    progressPercentage: '50',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Pitágoras-Ampli',
    subHeader: 'Software Engineering',
    duration: 'March 2021 - December 2025',
    desc: '',
    grade: 'Graduating',
    descBullets: [
      '',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Jump Label Solutions',
    companyLogo: '/img/icons/common/jump.png',
    date: 'Jan 2023 – Jun 2023',
    desc: "I worked as Senior Frontend developer (temporary contract) on a financial results dashboard project for a Brazilian bank. Technologies: Java, HTML, CSS, Javascript, API, ApexCharts and Apache ECharts.",
  },
  {
    role: 'Scrum Master',
    company: 'Programmer\'s Informática',
    companyLogo: '/img/icons/common/programmers.png',
    date: 'Jan 2022 – Jun 2022',
    desc: 'I worked as Scrum Master on Data Engineering team in the Self Service Business Intelligence product (Ambev). Skills: Scrum, Agile Methodologies, Management 3.0, Kanban and Azure DevOps.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Geledés - Instituto da Mulher Negra',
    companyLogo: '/img/icons/common/geledes.png',
    date: 'Mar 2009 - Dec 2021',
    desc: 'I worked as Senior Software Developer on architecture, development, deployment, testing, maintenance and cyber security of applications. Technologies: WordPress, PHP, MySQL, HTML, CSS and JavaScript.',
  },
  {
    role: 'Software Developer',
    company: 'PSA Peugeot Citroën',
    companyLogo: '/img/icons/common/peugeot.png',
    date: 'Jul 2007 - Dec 2008',
    desc: 'Expertise in developing software for managing financing contracts and reports. Technologies: PHP, JavaScript, HTML, CSS, Object-Oriented Programming (OOP), Smarty Templates, Linux, PostgreSQL.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'React BMI Calculator',
    desc: 'Simple React App to calculate Body Mass Index. Project deployed on Vercel.com with Create React App.',
    github: 'https://github.com/odemur/react-bmi-calculator',
    link: 'https://react-bmi.vercel.app/',
  },
  {
    name: 'React, Node.js and Express.js',
    desc: 'Simple Book Catalog created in MongoDB, Express.js, React, Tailwind CSS and Node.js (MERN).',
    github: 'https://github.com/odemur/simple-book-catalog',
    link: 'https://github.com/odemur/simple-book-catalog',
  },
  {
    name: 'REST API - Java Spring Boot',
    desc: 'REST API developed in Java, Spring Boot, PostgreSQL or MySQL and API documentation using Swagger UI.',
    github: 'https://github.com/odemur/spring-boot-rest-api',
    link: 'https://odemur-spring-boot-rest-api.herokuapp.com/swagger-ui/index.html',
  },
  {
    name: 'CRUD - Java and Thymeleaf',
    desc: 'A simple CRUD App built on Java, Spring Boot, Thymeleaf and H2, PostgreSQL or MySQL Server database.',
    github: 'https://github.com/odemur/java-spring-boot-crud',
    link: 'https://odemur-spring-boot-crud.herokuapp.com',
  },
];

export const showContactUs: boolean = true;

export const seoData: SEODataType = {
  title: 'Odemur Marangoni',
  description:
    'A passionate Software Developer.',
  author: 'Odemur Marangoni',
  image: 'https://avatars.githubusercontent.com/u/118846877?v=4',
  url: 'https://odemur.com.br',
  keywords: [
    'Odemur',
    'Marangoni',
    'Odemur Marangoni',
    '@odemur',
    'Odemur Software Developer',
    'Odemur Software Engineer',
  ],
};
