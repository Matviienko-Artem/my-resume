import React from 'react';
import style from './Projects.module.css';

export default function Projects() {
  return (
    <div className={style.projects_container}>
      <h3 className={style.about_me_title}>Projects</h3>
      <ol>
        <li className={style.projects_item}>
          <a
            className={style.projects_link}
            href="https://novus.crm-service.com.ua/eyJzaG9wIjoiMTA0NyIsImxvY2F0aW9uIjoiMTA0N18xMSJ9"
            target="_blank"
            rel="noreferrer"
          >
            Novus (mobile questionnaire)
          </a>
          <span className={style.dots}>
            ............................................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>HTML5, CSS3 ,JavaScript</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> Mobile quality of service questionnaire for
            Novus clients.
          </p>
        </li>
        <li className={style.projects_item}>
          <a
            className={style.projects_link}
            href="https://matviienko-artem.github.io/CoW_pure/"
            target="_blank"
            rel="noreferrer"
          >
            Circle of White
          </a>
          <span className={style.dots}>
            ............................................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>HTML5, CSS3 ,JavaScript</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> This is online wallet,you can keep track of
            your money and see statistics of your expenses. Using React.js,
            Redux, Node.js and libraries ( Chart.js, Formik ).
          </p>
        </li>
        {/* <li className={style.projects_item}>
          <a
            className={style.projects_link}
            href="https://wallet-app-project-nn33mm.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Wallet
          </a>
          <span className={style.dots}>
            ............................................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>React.js, Redux, Node.js</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> This is online wallet,you can keep track of
            your money and see statistics of your expenses. Using React.js,
            Redux, Node.js and libraries ( Chart.js, Formik ).
          </p>
        </li> */}
        <li className={style.projects_item}>
          <a
            className={style.projects_link}
            href="https://matviienko-artem.github.io/goit-markup-hw-08/"
            target="_blank"
            rel="noreferrer"
          >
            Web Studio{' '}
          </a>
          <span className={style.dots}>
            ...............................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>
              HTML5, CSS3, Adaptive Web Page
            </span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> Web Studio site. Neat and tasty design,
            responsible layout. Using HTML5, CSS3, JS.
          </p>
        </li>
        <li className={style.projects_item}>
          {' '}
          <a
            className={style.projects_link}
            href="https://matviienko-artem.github.io/goit-react-hw-03-image-finder/"
            target="_blank"
            rel="noreferrer"
          >
            Image Finder{' '}
          </a>
          <span className={style.dots}>
            ..........................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>React.js ,Pixabay API</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> This is a simple project to find images using
            Pixabay API. Using React.js and npm-packages.
          </p>
        </li>
        <li className={style.projects_item}>
          <a
            className={style.projects_link}
            href="https://maksimlisovoi.github.io/team-project-js-filmoteka/"
            target="_blank"
            rel="noreferrer"
          >
            Team Project Filmoteka{' '}
          </a>
          <span className={style.dots}>..................</span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>HTML5, CSS3 ,JavaScript</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> Team project about searching movies, and
            adding favorite movies to a client personal library. Using pure
            JavaScript, CSS3 and npm-packages.
          </p>
        </li>

        {/* <li className={style.projects_item}>
          {' '}
          <a
            className={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-04-movies.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Movies{' '}
          </a>
          <span className={style.dots}>
            ..........................................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>React.js, Themoviedb API</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> This is my project to find movies using
            Themoviedb API. Using React.js and npm-packages.
          </p>
        </li> */}
        {/* <li className={style.projects_item}>
          {' '}
          <a
            className={style.projects_link}
            href="https://matviienko-artem-goit-react-hw-09-phonebook.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Phonebook{' '}
          </a>
          <span className={style.dots}>
            ..............................................
          </span>
          <span>
            <b>[ </b>
            <span className={style.tech_name}>React.js, Redux</span>
            <b> ]</b>
          </span>
          <p className={style.description}>
            <b>About project:</b> This is phonebook. You can register and add
            contacts to yours phonebook. Using React.js, Redux.
          </p>
        </li> */}
      </ol>
    </div>
  );
}
