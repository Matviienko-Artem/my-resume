import React from 'react';
import style from './TechSkills.module.css';

export default function TechSkills() {
  return (
    <div className={style.tech_skills_container}>
      <h3 className={style.tech_skills_title}>Tech Skills</h3>
      <ul>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>HTML5</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>CSS3</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>SCSS</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>JavaScript</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>React.js</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>Redux</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>Node.js</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>GIT</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>WebPack</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>REST API</span>
        </li>
        {/* <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>Node.js</span>
        </li> */}
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>Scrum</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>Agile</span>
        </li>
        <li className={style.tech_skills_item}>
          <span className={style.tech_skills_text}>GTD</span>
        </li>
      </ul>
    </div>
  );
}
