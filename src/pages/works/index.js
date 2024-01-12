import React from "react";
import styles from "./works.module.scss";


import GeneralInfo from "../../components/generalInfo";
import StepsComponent from "../../components/stepsComponent";
import Header from "../../components/header";

const Works = () => {
  return (
    <div className={styles.works}>
     <div style={{marginTop: '2rem'}}>
        <StepsComponent/>
        
     </div>

    </div>
  );
};

export default Works;
