import React from 'react';
import style from './WorkExp.module.css';

export default function WorkExp() {
  return (
    <div>
      <h3 className={style.about_me_title}>Work Experience</h3>
      <div>
        <h4 className={style.profession_title}>
          Front-end Developer{' '}
          <span className={style.profession_title_orange}>
            Digital Agency "SMELO"
          </span>
        </h4>
        <span className={style.profession_date}>
          September 2021 - until now{' '}
          <span className={style.profeiion_devider}>|</span> Ukraine
        </span>

        <h5 className={style.profession_duties_title}>
          Personal Responsibilities
        </h5>
        <ul className={style.profession_duties}>
          <li>Scope estimation, analysis, and prioritization.</li>
          <li>
            Frontend implementation and architecture design; Responsive design.
          </li>
          <li>Backend team collaboration.</li>
          <li>
            Communicate directly to customers. Cross-team communication with
            developers and team.
          </li>
          <li>Demos.</li>
          <li>Documentation.</li>
        </ul>

        <h5 className={style.profession_duties_title}>Technologies</h5>
        <ul className={style.profession_duties}>
          <li>JavaScript (ES5, ES6)</li>
          <li>WordPress</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Responsive markup for both desktop and mobiles</li>
        </ul>
      </div>
      {/* <div>
        <h4 className={style.profession_title}>
          Fitness Instructor{' '}
          <span className={style.profession_title_orange}>
            Fitness Centre "Gymmaxx"
          </span>
        </h4>
        <span className={style.profession_date}>
          August 2016 - May 2021{' '}
          <span className={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul className={style.profession_duties}>
          <li>Demonstrating exercises and routines to clients.</li>
          <li>
            Assisting clients in exercises to minimize injury and promote
            fitness.
          </li>
          <li>Modify exercises according to clients’ fitness levels.</li>
          <li>Monitoring client progress.</li>
          <li>
            Providing information or resources on general fitness and health
            issues.
          </li>
          <li>Providing emergency first aid if necessary.</li>
        </ul>
      </div> */}
      {/* <div>
        <h4 className={style.profession_title}>
          Administrator{' '}
          <span className={style.profession_title_orange}>
            Fitness Centre "Gymmaxx"
          </span>
        </h4>
        <span className={style.profession_date}>
          April 2015 - August 2016{' '}
          <span className={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul className={style.profession_duties}>
          <li>
            Extensive knowledge on the operation and maintenance of gym
            equipment and facilities.
          </li>
          <li>Good communication and customer service skills.</li>
          <li>
            Possess pleasant personality with excellent telephone etiquette.
          </li>
          <li>
            Skilled in handling multiple tasks and maintaining good relationship
            with members and colleagues.
          </li>
        </ul>
      </div> */}
    </div>
  );
}
