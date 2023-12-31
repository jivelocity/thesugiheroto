import React from "react";
import styles from "./skills.module.css";
import terminal from "../../assets/terminal.png";
import webDev from "../../assets/webDev.png";
import nulis from "../../assets/nulis.png";
import { StyledTitle } from "../../globalStyle";

const skills = [
  {
    title: "Bisa Pake Terminal",
    description:
      "Udah terbiasa sih pake terimnal kek gini, karena lebih cepet kerjanya ketimbang pake GUI-GUI begitu.",
    image: terminal,
  },
  {
    title: "Web Development",
    description:
      "Bikin web itu gampang, tinggal ketik-ketik kode doang dah jadi lah web. Apalagi sekarang bisa pake Wix hehe.",
    image: webDev,
  },
  {
    title: "Nulis Artikel",
    description:
      "Biasa nulis artikel di web sendiri, ya walaupun masih berantakan yang penting nulis sih, daripada nggak sama sekali.",
    image: nulis,
  },
];

const Skills: React.FC = () => {
  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.skillsTitle}>
        <StyledTitle $textBg="Skills">Skills</StyledTitle>
        <p>
          Beberapa skill yang saya punya, sebenernya banyak skill saya, tapi
          males masukin.
        </p>
      </div>
      <div className={styles.cardsWrapper}>
        {skills.map((skill) => (
          <div className={styles.card}>
            <img src={skill.image} alt="" />
            <h2>{skill.title}</h2>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
