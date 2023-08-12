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
    ecommerce,
    headphone,
    promptopia,
    flexible,
    carBooking,
    amazon,
    estate,
    shoppersParadise
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
      name: "Cars' Booking Website",
      description:
        "This car booking website leverages modern web technologies like Next.js, Rapid API, Tailwind CSS and by adopting a client-server architecture, it efficiently manages data handling and user interactions ",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Rapid API",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: carBooking,
      source_code_link: "https://github.com/magamanukyan/car-booking",
      source_link:"https://car-booking-two.vercel.app/"
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
      name: "Ecommerce Webpage",
      description:
        "This project is developed as a dynamic and interactive headphone webpage using React, Sanity, Toast, and React Router DOM. It showcases a variety of headphones and provides an immersive user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "green-text-gradient",
        },
        {
          name: "Toast",
          color: "pink-text-gradient",
        },
      ],
      image: headphone,
      source_code_link: "https://github.com/magamanukyan",
      source_link:"https://store-headphone.vercel.app/"
    },
    {
      name: "Ecommerce Webpage",
      description:
        "This project is developed as a dynamic and interactive headphone webpage using React, Strapi, Stripe, and React Router DOM. It showcases a variety of headphones and provides an immersive user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "strapi",
          color: "green-text-gradient",
        },
        {
          name: "stripe",
          color: "pink-text-gradient",
        },
      ],
      image: shoppersParadise,
      source_code_link: "https://github.com/magamanukyan",
      source_link:"https://shoppers-paradise.vercel.app/"
    },
    {
      name: "Amazon Webpage",
      description:
        "This project is developed as a dynamic and interactive amazon webpage using Next.js, Tailwind Css, Stripe, and React Router DOM. It showcases a variety of headphones and provides an immersive user experience.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Stripe",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/magamanukyan/amazon-app",
      source_link:"https://amazon-app-xi.vercel.app/"
    },
    {
      name: "Real Estate",
      description:
        "This user-friendly and dynamic real estate platform built on Next.js, Tailwind CSS, and Ant Design (Antd). Whether you're looking for a cozy apartment or a spacious family home, it has got you covered..",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Antd",
          color: "pink-text-gradient",
        },
      ],
      image: estate,
      source_code_link: "https://github.com/magamanukyan",
      source_link:"https://real-estate-rosy-one.vercel.app/"
    },
    {
      name: "Flexible",
      description:
        "This developer-focused project leverages Cloudinary, JWT, Tailwind CSS, and Next.js to create an interactive platform for sharing  projects. Developers can showcase their work and edit profiles.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "green-text-gradient",
        },
        {
          name: "JWT",
          color: "pink-text-gradient",
        },
      ],
      image: flexible,
      source_code_link: "https://github.com/magamanukyan",
      source_link:"https://grafbase-flexible-henna.vercel.app/"
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
      name: "Prompts for AI",
      description:
        "Webpage is dynamic platform for posts and prompts directed to AI.This project is developed as a dynamic and interactive  webpage using Next, MongoDB, tailwindcss. ",
      tags: [
        {
          name: "next",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: promptopia,
      source_code_link: "https://github.com/magamanukyan/project-promtopia/tree/main",
      source_link:"https://project-promtopia-p73fmgahz-magamanukyan.vercel.app/"
    },
    {
      name: "Online gym",
      description:
        " Website is packed with online exercises and YouTube videos that target all parts of the body, from full-body workouts to targeted exercises for specific muscle groups",
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