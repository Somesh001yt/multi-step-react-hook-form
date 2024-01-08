import React from "react";
import styles from "./works.module.scss";

import Arrow from "../../assests/flip-backward.svg";
import GeneralInfo from "../../components/generalInfo";
import StepsComponent from "../../components/stepsComponent";

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={styles.headers}>
        <div className={styles.imageDiv}>
          <img src={Arrow} />
        </div>
        <h4 className={styles.title}>New Job 0003301S</h4>
      </div>

     <div style={{marginTop: '2rem'}}>
        <StepsComponent/>
        
     </div>

    </div>
  );
};

export default Works;
