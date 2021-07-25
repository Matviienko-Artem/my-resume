import React from 'react';
import style from './LanguageSkills.module.css';

export default function LanguageSkills() {
  return (
    <div className={style.language_skill_container}>
      <h3 className={style.language_skill_title}>Language Skills</h3>
      <ul>
        <li className={style.language_skills_item}>
          <span className={style.language_skills_text}>Ukrainian - native</span>
        </li>
        <li className={style.language_skills_item}>
          <span className={style.language_skills_text}>Russian - native</span>
        </li>
        <li className={style.language_skills_item}>
          <span className={style.language_skills_text}>
            English - pre-intermediate
          </span>
        </li>
      </ul>
    </div>
  );
}
