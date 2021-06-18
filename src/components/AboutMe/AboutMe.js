import React from "react";
import style from "./AboutMe.module.css";
import Title from "../Title/Title";
import Projects from "../Project/Projects";
import WorkExp from "../WorkExp/WorkExp";
import Education from "../Education/Education";

export default function AboutMe() {
  return (
    <div class={style.about_me_container}>
      <Title />
      <Projects />
      <WorkExp />
      <Education />
    </div>
  );
}
