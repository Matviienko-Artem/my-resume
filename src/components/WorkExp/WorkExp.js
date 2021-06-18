import React from "react";
import style from "./WorkExp.module.css";

export default function WorkExp() {
  return (
    <div>
      <h3 class={style.about_me_title}>Work Experience</h3>
      <div>
        <h4 class={style.profession_title}>
          Front-End Developer{" "}
          <span class={style.profession_title_orange}>Freelance</span>
        </h4>
        <span class={style.profession_date}>
          September 2019 - up to now{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul class={style.profession_duties}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod labore et dolore magna aliqua.
          </li>
          <li>Quis ipsum suspendisse ultrices gravida.</li>
          <li>Risus commodo viverra maecenas.</li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </li>
        </ul>
      </div>
      <div>
        <h4 class={style.profession_title}>
          Manager{" "}
          <span class={style.profession_title_orange}>Roga & Kopyta New</span>
        </h4>
        <span class={style.profession_date}>
          March 2015 - October 2018{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul class={style.profession_duties}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod labore et dolore magna aliqua.
          </li>
          <li>Quis ipsum suspendisse ultrices gravida.</li>
          <li>Risus commodo viverra maecenas.</li>
        </ul>
      </div>
      <div>
        <h4 class={style.profession_title}>
          Manager{" "}
          <span class={style.profession_title_orange}>Roga & Kopyta LLC</span>
        </h4>
        <span class={style.profession_date}>
          June 2014 - February 2015{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul class={style.profession_duties}>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Quis ipsum suspendisse ultrices gravida.</li>
          <li>Risus commodo viverra maecenas. </li>
        </ul>
      </div>
    </div>
  );
}
