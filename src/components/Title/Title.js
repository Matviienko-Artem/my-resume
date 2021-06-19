import React from "react";
import style from "./Title.module.css";

export default function Title() {
  return (
    <div class={style.info_conteiner}>
      <h2 class={style.profession}>Front-End Developer</h2>
      <h1 class={style.name}>Artem Matviienko</h1>

      <p class={style.description}>
        A conscientious, tactful and responsive person always strives for
        excellence in the business he is doing! Cheerful, friendly and always
        try to be positive. I love animals, sports, music and video games. I
        love fast cars and snowboard.
      </p>
    </div>
  );
}
