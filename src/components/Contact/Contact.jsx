import React from 'react'
import styles from "../Contact/Contact.module.css"

import emailIcon from "../../assets/contact/emailIcon.png"
import linkedinIcon from "../../assets/contact/linkedinIcon.png"
import githubIcon from "../../assets/contact/githubIcon.png"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email Icon" />
          <a href="mailto:yaelsilvestre64@gmail.com">yaelsilvestre64@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/yael-silvestre-93774924a">
            linkedin.com/in/yael-silvestre-93774924a
          </a>
        </li>

        <li className={styles.link}>
          <img src={githubIcon} alt="Github Icon" />
          <a href="https://github.com/Yaelox">github.com/Yaelox</a>
        </li>
      </ul>
    </footer>
  )
}