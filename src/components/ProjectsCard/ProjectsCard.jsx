import React from "react";
import styles from "./ProjectsCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {

  const images = import.meta.glob("../../assets/**/*", { eager: true });

  const getImage = (path) => {
    return images[`../../assets/${path}`]?.default;
  };

  return (
    <div className={styles.container}>
      <img
        src={getImage(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};