import React from "react";

import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/foto.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Angel Yael Silvestre Robledo</h1>
        <p className={styles.description}>
            I'm a Full Stack Software Engineer focused on building fast, scalable, and user-centered web and mobile applications. 
            I'm specialized in frontend-backend integration, as well as SQL database design and optimization.
            I enjoy turning ideas into functional solutions by applying best development practices, clean code, and efficient architectures. I work with agile methodologies and quickly adapt to new technologies to deliver real value in every project.
        </p>
        <a href="mailto:yaelsilvestre64@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
        />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
