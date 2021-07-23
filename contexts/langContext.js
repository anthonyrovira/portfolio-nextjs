import { createContext } from "react";

import mainData from "@content/json/ar-main.json";
import headerData from "@content/json/ar-header.json";
import projectsData from "@content/json/ar-projects.json";

export const languages = {
  english: {
    lang: "en",
    main: mainData.english,
    header: headerData.english,
    projects: projectsData,
    back: "Back",
    previous: "Previous",
    next: "Next",
    send: "Send",
    project: "Project",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    readmore: "Read More",
    contactme: "Contact Me",
    description: "Description",
    date: "Date",
  },
  french: {
    lang: "fr",
    main: mainData.french,
    header: headerData.french,
    back: "Retour",
    previous: "Précédent",
    next: "Suivant",
    send: "Envoyer",
    project: "Projet",
    projects: "Projets",
    skills: "Compétences",
    about: "À propos",
    contact: "Contact",
    readmore: "En savoir plus",
    contactme: "Contactez Moi",
    description: "Description",
    date: "Date",
  },
};

export const LanguageContext = createContext(
  languages.english // default value
);
