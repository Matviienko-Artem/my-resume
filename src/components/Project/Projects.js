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
          >
            matviienko-artem.github.io/goit-markup-hw-08/{" "}
          </a>
          <span class={style.dots}>...............</span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>HTML5, CSS3</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://github.com/MaksimLisovoi/team-project-js-filmoteka"
          >
            github.com/MaksimLisovoi/team-project-js-filmoteka{" "}
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
          >
            matviienko-artem.github.io/goit-react-hw-03-image-finder/{" "}
          </a>
          <span class={style.dots}>........................</span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-04-movies.netlify.app/"
          >
            matviienko-artem-goit-react-hw-04-movies.netlify.app/{" "}
          </a>
          <span class={style.dots}>..................</span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js</span>
            <b> ]</b>
          </span>
        </li>
        <li class={style.projects_item}>
          {" "}
          <a
            class={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-09-phonebook.netlify.app/"
          >
            matviienko-artem-goit-react-hw-09-phonebook.netlify.app{" "}
          </a>
          <span class={style.dots}>..................</span>
          <span>
            <b>[ </b>
            <span class={style.tech_name}>React.js</span>
            <b> ]</b>
          </span>
        </li>
      </ol>
    </div>
  );
}
