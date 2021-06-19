import React from "react";
import style from "./WorkExp.module.css";

export default function WorkExp() {
  return (
    <div>
      <h3 class={style.about_me_title}>Work Experience</h3>
      <div>
        <h4 class={style.profession_title}>
          Fitness Instructor{" "}
          <span class={style.profession_title_orange}>
            Fitness Centre "Gymmaxx"
          </span>
        </h4>
        <span class={style.profession_date}>
          August 2016 - May 2021 <span class={style.profeiion_devider}>|</span>{" "}
          Ukraine
        </span>
        <ul class={style.profession_duties}>
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
      <div>
        <h4 class={style.profession_title}>
          Administrator{" "}
          <span class={style.profession_title_orange}>
            Fitness Centre "Gymmaxx"
          </span>
        </h4>
        <span class={style.profession_date}>
          April 2015 - August 2016{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul class={style.profession_duties}>
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
      </div>
      <div>
        <h4 class={style.profession_title}>
          Loan Officer{" "}
          <span class={style.profession_title_orange}>PrivatBank</span>
        </h4>
        <span class={style.profession_date}>
          March 2013 - September 2013{" "}
          <span class={style.profeiion_devider}>|</span> Ukraine
        </span>
        <ul class={style.profession_duties}>
          <li>
            Meet with loan applicants to identify their needs and collect
            information for loan applications.
          </li>
          <li>
            Analyze active loan files on a regular basis and recommend solutions
            to speed up the loan process.
          </li>
          <li>
            Complete loan contracts and teach clients on policies and
            regulations.
          </li>
          <li>
            Interview applicants to define financial eligibility and establish
            debt payment plans.
          </li>
        </ul>
      </div>
    </div>
  );
}
