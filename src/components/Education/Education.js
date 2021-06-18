import React from "react";
import style from "./Education.module.css";

export default function Education() {
  return (
    <div>
      <h3 class={style.about_me_title}>Education</h3>
      <div>
        <h4 class={style.university}>
          Kharkiv National University of Radioelectronics
        </h4>
        <h5 class={style.university_profession}>Management</h5>
        <span class={style.profession_date}>
          Septermber 2009 - June 2014{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
      </div>
    </div>
  );
}
