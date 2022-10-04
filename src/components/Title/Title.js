import React from 'react';
import style from './Title.module.css';

export default function Title() {
  return (
    <div className={style.info_conteiner}>
      <h2 className={style.profession}>Front-End Developer</h2>
      <h1 className={style.name}>Artem Matviienko</h1>
      <h3 className={style.about_me_title}>Summary</h3>
      <p className={style.description}>
        I am a Front-End developer. I focus on HTML5, CSS3,JS,React,Redux,
        Node.js. A conscientious, tactful and responsive person always strives
        for excellence in the business he is doing! Cheerful, friendly and
        always try to be positive.
      </p>
    </div>
  );
}
