import React from "react";
import style from "./Education.module.css";

export default function Education() {
  return (
    <div>
      <h3 class={style.about_me_title}>Education</h3>
      <div>
        <h4 class={style.university}>GoIT Academy</h4>
        <h5 class={style.university_profession}>Full Stack Developer</h5>
        <span class={style.profession_date}>
          July 2020 - July 2021 <span class={style.profeiion_devider}>|</span>{" "}
          Ukraine
        </span>
      </div>
      <div>
        <h4 class={style.university}>
          National University of Ukraine on Physical Education and Sport
        </h4>
        <h5 class={style.university_profession}>
          Physical Rehabilitation Specialist, Physical Education Teacher
        </h5>
        <span class={style.profession_date}>
          Septermber 2016 - June 2020{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
      </div>
      <div>
        <h4 class={style.university}>
          Kyiv National University of Construction and Architecture
        </h4>
        <h5 class={style.university_profession}>
          Urban Еngineering and Services
        </h5>
        <span class={style.profession_date}>
          Septermber 2010 - July 2014{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
      </div>
    </div>
  );
}
