import React from "react";
import style from "./Projects.module.css";

export default function Projects() {
  return (
    <div class={style.projects_container}>
      <h3 class={style.about_me_title}>Projects</h3>
      <ol>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem.github.io/goit-markup-hw-08/"
            target="_blank"
            rel="noreferrer"
          >
            Web Studio{" "}
          </a>
          <span class={style.dots}>
            ...............................................
          </span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>HTML5, CSS3, Adaptive Web Page</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://github.com/MaksimLisovoi/team-project-js-filmoteka"
            target="_blank"
            rel="noreferrer"
          >
            Team Project Filmoteka{" "}
          </a>
          <span class={style.dots}>..................</span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>HTML5, CSS3 ,JavaScript</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem.github.io/goit-react-hw-03-image-finder/"
            target="_blank"
            rel="noreferrer"
          >
            Image Finder{" "}
          </a>
          <span class={style.dots}>
            ..........................................
          </span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js ,Pixabay API</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-04-movies.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Movies{" "}
          </a>
          <span class={style.dots}>
            ..........................................................
          </span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js, Themoviedb API</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-09-phonebook.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Phonebook{" "}
          </a>
          <span class={style.dots}>
            ..............................................
          </span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js, Redux</span>
            <b> ]</b>
          </span>
        </li>
      </ol>
    </div>
  );
}
