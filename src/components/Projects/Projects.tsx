import React from "react";
import { StyledTitle } from "../../globalStyle";
import styles from "./projects.module.css";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";

const projects = [
  {
    title: "Login Page UI Design",
    category: "UI/UX Design",
    image: project1,
  },
  {
    title: "KKYBSYS Web Site ",
    category: "Web Development",
    image: project2,
  },
  {
    title: "Hasten Portfolio ",
    category: "UI/UX Design",
    image: project3,
  },
  {
    title: "Collola. Design",
    category: "UI/UX Design",
    image: project4,
  },
  {
    title: "Hayu Atuh Kajian",
    category: "Mobile Development",
    image: project5,
  },
  {
    title: "Adyen Landing Page",
    category: "UI/UX Design",
    image: project6,
  },
];

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className={styles.projectWrapper}>
      <div className={styles.titleProjectWrapper}>
        <StyledTitle $textBg="Projects">Projects</StyledTitle>
        <p>
          Di halaman ini kamu akan menemukan proyek-proyek yang pernah saya
          buat.
        </p>
        <ul>
          {["All", "Web Development", "Mobile Development", "UI/UX Design"].map(
            (item, i) => (
              <li
                key={i}
                onClick={() => setSelectedCategory(item)}
                className={
                  selectedCategory === item
                    ? styles.activeCategory
                    : styles.noActiveCategory
                }
              >
                {item}
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={styles.cardsProjectWrapper}>
        {filteredProjects.map((project, index) => (
          <div className={styles.cardProjectWrapper} key={index}>
            <div className={styles.cardProjectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <div className={styles.cardProjectTitle}>
              <h3>{project.title}</h3>
            </div>
            <div className={styles.cardProjectCategory}>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
