import React from 'react';
import style from './Contacts.module.css';

export default function Contacts() {
  return (
    <div className={style.contacts_conteiner}>
      <h3 className={style.contacts_title}>Contacts</h3>
      <div>
        {' '}
        {/* <span className={style.contacts_link_type}>C:</span> */}
        <a className={style.contacts_link} href="tel:380951138598">
          +38 063 268 03 15
        </a>
      </div>
      <div>
        {/* <span className={style.contacts_link_type}>E:</span>{" "} */}
        <a className={style.contacts_link} href="mailto:k2141092mav@gmail.com">
          k2141092mav@gmail.com
        </a>
      </div>
      <div>
        {/* <span className={style.contacts_link_type}>E:</span>{" "} */}
        <a
          className={style.contacts_link}
          href="https://www.linkedin.com/in/artem-matviienko-277a55200/"
          target="_blank"
          rel="noreferrer"
        >
          www.linkedin.com
        </a>
      </div>
    </div>
  );
}
