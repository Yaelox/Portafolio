import React from 'react'
import aboutImage from "../../assets/about/about.png";
import Cursor from "../../assets/about/cursorIcon.png"
import Server from "../../assets/about/serverIcon.png"
import Util from "../../assets/about/util.png"
import styles from "./About.module.css";

export const About = () => {
  return <section className={styles.container} id='about'>
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src={aboutImage} alt="Me sitting with a laptop" className={styles.aboutImage} />
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={Cursor} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>Soy un desarrollador Frontend enfocado en la creación de interfaces web modernas y responsivas. Tengo habilidades en HTML, CSS, JavaScript y herramientas como React, Vite, Tailwind CSS y Git, desarrollando experiencias de usuario limpias, mantenibles y escalables.</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Server} alt="Server Icon" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>Soy un desarrollador Backend enfocado en la creación de aplicaciones del lado del servidor escalables y seguras. Tengo experiencia en Node.js, Express, APIs REST y bases de datos como MongoDB y MySQL, con un enfoque en código limpio, mantenible y eficiente.</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Util} alt="Util icon" />
            <div className={styles.aboutItemText}>
                <h3>UI/UX Designer</h3>
                <p>
                  Soy un diseñador UI/UX enfocado en la creación de experiencias digitales intuitivas y centradas en el usuario. Tengo habilidades en investigación, creación de wireframes, prototipado y pruebas de usabilidad utilizando Figma, entregando diseños visualmente atractivos y funcionales.
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Server} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Database Designer</h3>
                <p>Soy un desarrollador de bases de datos enfocado en el diseño y optimización de bases de datos seguras y eficientes. Tengo experiencia en SQL, modelado de datos, MySQL y MongoDB, con un enfoque en consultas optimizadas, integridad de datos y soluciones escalables y mantenibles.
                </p>
            </div>
        </li>
    </ul>
    </div>
  </section>
}
