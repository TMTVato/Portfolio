import { u } from "maath/dist/misc-19a3ec46.esm";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    c,
    cplusplus,
    java,
    python,
    vb,
    reactjs,
    git,
    figma,
    quartDeSinge,
    dijkstra,
    formation,
    morlaixRefonte,
    janson,
    uParis,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Profil",
    },
    {
      id: "works",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Web",
      icon: web,
    },
    {
      title: "Développeur React",
      icon: mobile,
    },
    {
      title: "Développeur logiciel",
      icon: backend,
    },
    {
      title: "Game designer",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },

    {
      name: "Python",
      icon: python,
    },
 
    {
      name: "c++",
      icon: cplusplus,
    },
    {
      name: "c",
      icon: c,
    },
    {
      name: "VB.NET",
      icon: vb,
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
      title: "Baccalauréat Géneral",
      school_name: "Janson de Sailly",
      icon: janson,
      iconBg: "#383E56",
      date: "2019 - 2022",
      points: [
        "Obtention avec mention Bien",
        "Spécialités : Mathématiques, NSI",
      ],
    },
    {
      title: "BUT Informatique",
      school_name: "IUT Rives de Seine",
      icon: uParis,
      iconBg: "#E6DEDD",
      date: "Depuis 2022",
      points: [
        "Parcours : Réalisation d’applications",
      ],
    },
   
  ];
  
 
  
  const projects = [
    {
      name: "Gestion d'une formation",
      description:
        "L’objectif de ce projet consistait à l’implémentation d’un besoin client. Ici, développer un interpréteur de commande permettant de gérer une formation universitaire. Tout en respectant des contraintes telles qu’un cahier des charges et des limites numériques.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
      ],
      image: formation,
      source_code_link: "https://github.com/TMTVato/SAE-Gestion-de-formation",
    },
    {
      name: "Jeu du quart du singe",
      description:
        "L’objectif de ce projet consistait à développer un logiciel permettant à un ensemble de joueurs de disputer une partie de quart de singe. L’application doit veiller au respect des règles du jeu et gérer la totalité du déroulement de la partie jusqu'à l’annonce du perdant tout en respectant un cahier des charges.",
      tags: [
        {
          name: "C++",
          color: "pink-text-gradient",
        },
    
      ],
      image: quartDeSinge,
      source_code_link: "https://github.com/TMTVato/SAE-Jeu-du-Quart-de-Singe",
    },
    {
      name: "Graphes: algorithme de Dijkstra",
      description:
        "Réalisation en Java d'une application permettant de manipuler des graphes. Une application qui permet de déterminer le plus court chemin d'un itinéraire.",
      tags: [
        {
          name: "Java",
          color: "green-text-gradient",
        },

      ],
      image: dijkstra,
      source_code_link: "https://github.com/TMTVato/SAE2.02-Graphes",
    },
    {
      name: "Refonte site web: Morlaix communauté",
      description:
        "Réalisation en React d'un site web pour la communauté de Morlaix. Une MVP du site web qui a dû être refait entièrement pour être plus moderne et plus fonctionnel.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Figma",
          color: "green-text-gradient",
        },
        {
          name: "HTML 5 / CSS",
          color: "pink-text-gradient",
        },

      ],
      image: morlaixRefonte,
      source_code_link: "https://github.com/riadfrz/SAE_DEV_WEB",
    },
  ];
  
  export { services, technologies, experiences, projects };