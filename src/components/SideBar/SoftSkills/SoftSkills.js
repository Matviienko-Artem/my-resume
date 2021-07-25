import React from 'react';
import style from './SoftSkills.module.css';

export default function SoftSkills() {
  return (
    <div className={style.soft_skill_container}>
      <h3 className={style.soft_skill_title}>Soft Skills</h3>
      <ul>
        <li className={style.soft_skills_item}>
          <span className={style.soft_skills_text}>Teamwork</span>
        </li>
        <li className={style.soft_skills_item}>
          <span className={style.soft_skills_text}>Communication</span>
        </li>
        <li className={style.soft_skills_item}>
          <span className={style.soft_skills_text}>Decission-making</span>
        </li>
      </ul>
    </div>
  );
}
