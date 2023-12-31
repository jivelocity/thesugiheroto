import React from "react";
import styles from "./contact.module.css";
import contactImage from "../../assets/contact.png";
import { StyledTitle } from "../../globalStyle";

const Contact: React.FC = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.titleContactWrapper}>
        <StyledTitle $textBg="Contact">Contact</StyledTitle>
        <p>Kamu bisa menghubungi saya lewat kedua kontak di bawah ini.</p>
        <div className={styles.detailsContactWrapper}>
          <div className={styles.detailContactWrapper}>
            <div className={styles.icon}>
              <svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.812 6.25a6.25 6.25 0 0 1 4.938 4.938L18.812 6.25Zm0-5a11.25 11.25 0 0 1 9.938 9.925L18.812 1.25Zm8.688 19.9v3.75a2.5 2.5 0 0 1-2.725 2.5 24.736 24.736 0 0 1-10.788-3.837 24.376 24.376 0 0 1-7.5-7.5A24.738 24.738 0 0 1 2.65 5.225 2.5 2.5 0 0 1 5.137 2.5h3.75a2.5 2.5 0 0 1 2.5 2.15c.159 1.2.452 2.378.875 3.512A2.5 2.5 0 0 1 11.7 10.8l-1.588 1.587a20 20 0 0 0 7.5 7.5L19.2 18.3a2.5 2.5 0 0 1 2.637-.563 16.05 16.05 0 0 0 3.513.876 2.5 2.5 0 0 1 2.15 2.537Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>+62 1234 8921</p>
          </div>
          <div className={styles.detailContactWrapper}>
            <div className={styles.icon}>
              <svg
                width="30"
                height="30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5h20c1.375 0 2.5 1.125 2.5 2.5v15c0 1.375-1.125 2.5-2.5 2.5H5a2.507 2.507 0 0 1-2.5-2.5v-15C2.5 6.125 3.625 5 5 5Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.5 7.5 15 16.25 2.5 7.5"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <p>support@mailand.jarjit</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContactWrapper}>
        <img src={contactImage} alt="contact" />
      </div>
    </div>
  );
};

export default Contact;
