import {
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    threejs,
    dashboard,
    fitclub,
    socialapp,
    gym,
    shop,
    ecommerce
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
   
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "...",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "...",
      icon: css,
      iconBg: "#383E56",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website such beautiful and dynamic as our product",
      name: "Sara",
      designation: "CFO",
      company: "... Corp",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like she does.",
      name: "Robert",
      designation: "COO",
      company: "... Corp",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      testimonial:
        "After she optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Luiza",
      designation: "CTO",
      company: "...Corp",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social App",
      description:
        "SocialWave is an innovative social platform using modern web technologies such as React.js, Sanity, Tailwind CSS and provides a client-server architecture that ensures efficient data handling and user interactions. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: socialapp,
      source_code_link: "https://github.com/magamanukyan/ShareMe",
      source_link:"https://share-me-jade.vercel.app/"
    },
    {
      name: "Dashboard",
      description:
        "Web-based dashboard that typically displays data in the form of visualizations such as charts, graphs, tables, and maps, making it easier for users to quickly interpret and understand complex data sets.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ReactECharts ",
          color: "green-text-gradient",
        },
        {
          name: "MaterialReactTable ",
          color: "pink-text-gradient",
        },
      ],
      image: dashboard,
      source_code_link: "https://github.com/magamanukyan/Dashboard-React",
      source_link:"https://dashboard-react-seven-lovat.vercel.app/"
    },
    {
      name: "FitClub",
      description:
        "Webpage that offers a variety of programs and packages designed to meet the needs and interests of users dedicated to helping people to achieve their best mental and physical health.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "NumberCounter",
          color: "green-text-gradient",
        },
        {
          name: "framer-motion",
          color: "pink-text-gradient",
        },
      ],
      image: fitclub,
      source_code_link: "https://github.com/magamanukyan/FitClub-Raect",
      source_link:"https://gym-ctj0uytoy-magamanukyan.vercel.app/",
    },
    {
      name: "Online Shop",
      description:
        "Webpage is dynamic platform that revolutionizes the way you shop online. With a  modern design, it offers a seamless user experience that combines catalog of products spanning various categories. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mui",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: shop,
      source_code_link: "https://github.com/magamanukyan/online-shop",
      source_link:"https://ecommercewebpage.vercel.app/"
    },
 
    {
      name: "Ecommerce website",
      description:
        "Webpage is dynamic platform that revolutionizes the way you shop online. With a  modern design, it offers a seamless user experience that combines catalog of products spanning various categories.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/magamanukyan/ecommerce-webpage.git",
      source_link:"https://ecommerce-webpage-eight.vercel.app/"
    },
    {
      name: "Online gym",
      description:
        " website is packed with online exercises and YouTube videos that target all parts of the body, from full-body workouts to targeted exercises for specific muscle groups",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "mui",
          color: "pink-text-gradient",
        },
      ],
      image: gym,
      source_code_link: "https://github.com/magamanukyan/FitClubApiReact",
      source_link:"https://fit-club-api-react.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };