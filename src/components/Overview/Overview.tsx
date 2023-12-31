import React from "react";
import styles from "./overview.module.css";

import theDik from "../../assets/thedik.png";
import overviewBg from "../../assets/overviewBg.png";
import { StyledTitle } from "../../globalStyle";

const Overview: React.FC = () => {
  return (
    <div className={styles.wrapperOverview}>
      <div className={styles.titleOverviewWrapper}>
        <div>
          <StyledTitle $textBg="Overview">Overview</StyledTitle>
          <p>
            Nama saya Thedik Sugiheroto, saya seorang software-engineer sebelum
            kata software-engineer itu ada. Saya terbiasa ngoding di Microsoft
            Word 2003.
          </p>
        </div>
        <div>
          <h2>Pendidikan</h2>
          <ul>
            <li>2003-2009 SDN California 2</li>
            <li>2009-2012 SMP Los Santos 9</li>
            <li>2012-2015 SMA Berlin Jakarta 64</li>
          </ul>
        </div>
        <div>
          <h2>Pekerjaan</h2>
          <ul>
            <li>Software Engineer at PT. Mencari Cinta Sejati</li>
            <li>Co-founder at A.D.M (Artis Dunia Maya)</li>
            <li>Manager at Liverpool F.C</li>
            <li>Manager at Cliquers Cllamanya</li>
          </ul>
        </div>
      </div>
      <div className={styles.imageOverviewWrapper}>
        <img className={styles.absoluteImage} src={theDik} alt="the dik" />
        <img src={overviewBg} alt="grid" />
        <p>BOOO</p>
      </div>
    </div>
  );
};

export default Overview;
