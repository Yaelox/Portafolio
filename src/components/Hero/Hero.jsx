import React from "react";

import styles from "./Hero.module.css";
import heroImg from "../../assets/hero/foto.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Angel Yael Silvestre Robledo</h1>
        <p className={styles.description}>
           Soy un Ingeniero de Software Full Stack enfocado en desarrollar aplicaciones web y móviles rápidas, escalables y centradas en el usuario.
Estoy especializado en la integración frontend-backend, así como en el diseño y optimización de bases de datos SQL.

Disfruto transformar ideas en soluciones funcionales aplicando buenas prácticas de desarrollo, código limpio y arquitecturas eficientes. Trabajo con metodologías ágiles y me adapto rápidamente a nuevas tecnologías para aportar valor real en cada proyecto.
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
