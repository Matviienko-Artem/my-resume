import React from "react";
import style from "./SideBar.module.css";
import photo from "./photo_artem.jpg";
import Contacts from "./Contacts/Contacts";
import TechSkills from "./TechSkills/TechSkills";
import SoftSkills from "./SoftSkills/SoftSkills";

export default function SideBar() {
  return (
    <aside className={style.sidebar}>
      <img className={style.my_photo} src={photo} alt="Photo_User" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
    </aside>
  );
}
