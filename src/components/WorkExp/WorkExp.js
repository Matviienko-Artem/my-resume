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
          September 2021 - April 2022{' '}
          <span className={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul className={style.profession_duties}>
          <li>Bringing the designer's vision to life.</li>
          <li>Planned, developed, deployed and maintained web applications.</li>
          <li>Worked with Wordpress.</li>
          <li>
            Provided effective troubleshooting and remediation for web
            applications.
          </li>
          <li>Worked well independently and within a team setting.</li>
        </ul>
      </div>
      <div>
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
      </div>
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
