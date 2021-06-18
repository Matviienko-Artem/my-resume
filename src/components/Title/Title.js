import React from "react";
import style from "./Title.module.css";

export default function Title() {
  return (
    <div class={style.info_conteiner}>
      <h2 class={style.profession}>Front-End Developer</h2>
      <h1 class={style.name}>Artem Matviienko</h1>

      <p class={style.description}>
        Добросовестный, тактичный и отзывчивый человек который всегда стремится
        к совершенству в деле которым занимается ! Жизнерадостный, дружелюбный и
        всегда стараюсь быть на позитиве. Люблю животных, спорт, музыку и
        видеоигры. Люблю быстрые машины и сноуборд.
      </p>
    </div>
  );
}
