import React from "react";
import styles from "./hero.module.css";
import heroBg from "../../assets/heroBg.png";
import heroImage from "../../assets/heroImage.png";
import square1 from "../../assets/square1.png";
import square2 from "../../assets/square2.png";
import square3 from "../../assets/square3.png";
import square4 from "../../assets/square4.png";
import circle2 from "../../assets/circle2.png";

const Hero: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textSectionWrapper}>
        <div className={styles.titleWrapper}>
          <h1>
            Hi, nama saya <br />
            <span>Thedik Sugiheroto</span>
          </h1>
          <p>
            Saya seorang software-engineer, pembaca buku, warga NU, dan juga
            murid (online) Pak Fahruddin Faiz.
          </p>
          <img
            style={{
              position: "absolute",
              top: "0",
              left: "-80px",
            }}
            src={square1}
            alt="kotak1"
          />
          <img
            style={{
              position: "absolute",
              right: "10px",
              top: "50px",
            }}
            src={square2}
            alt="kotak2"
          />
          <img
            style={{
              position: "absolute",
              right: "20px",
              bottom: "50px",
            }}
            src={square3}
            alt="kotak3"
          />
        </div>
        <div className={styles.titleButtonWrapper}>
          <a href="/overview" className={styles.titleButton}>
            <p>Go To Oveview</p>
            <div className={styles.row}>
              <svg
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1 9h9.8M9 4.1 13.9 9 9 13.9"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className={styles.infoWrapper}>
          <p>12</p>
          <p>8 yrs</p>
          <p>IDN</p>
          <img src={square4} alt="kotakblur" />
        </div>
        <img className={styles.circle2} src={circle2} alt="circleblur" />
      </div>
      <div className={styles.imageSectionWrapper}>
        <img src={heroBg} alt="background" />
        <img className={styles.absolute} src={heroImage} alt="Website" />
      </div>
    </div>
  );
};

export default Hero;
