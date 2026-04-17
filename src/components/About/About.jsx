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
                <p>I am a Frontend Developer building modern, responsive web interfaces. Skilled in HTML, CSS, JavaScript, and tools like React, Vite, Tailwind CSS, and Git, delivering clean, maintainable, and scalable user experiences.</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Server} alt="Server Icon" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I am a Backend Developer building scalable, secure server-side applications. Experienced in Node.js, Express, RESTful APIs, and databases like MongoDB and MySQL, with a focus on clean, maintainable, and efficient code.</p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Util} alt="Util icon" />
            <div className={styles.aboutItemText}>
                <h3>UI/UX Designer</h3>
                <p>
                   I am a UI/UX Designer creating intuitive, user-centered digital experiences. Skilled in research, wireframing, prototyping, and usability testing using Figma, delivering visually appealing and functional designs.
                </p>
            </div>
        </li>
        <li className={styles.aboutItem}>
            <img src={Server} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
                <h3>Database Designer</h3>
                <p>I am a Database Developer designing and optimizing secure, efficient databases. Experienced in SQL, data modeling, MySQL, and MongoDB, with a focus on optimized queries, data integrity, and scalable, maintainable solutions.
                </p>
            </div>
        </li>
    </ul>
    </div>
  </section>
}
