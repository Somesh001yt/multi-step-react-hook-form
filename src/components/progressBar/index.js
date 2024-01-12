import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import styles from "./progressBar.module.scss";

const ProgressBarComponent = ({ page }) => {
  console.log(page);

  var stepPercentage = 0;

  if (page === 0) {
    stepPercentage = 16;
  } else if (page === 1) {
    stepPercentage = 49.5;
  } else if (page === 2) {
    stepPercentage = 82.5;
  } else if (page === 3) {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`${styles.indexedStep} ${
              accomplished ? styles.accomplished : null
            }`}
          ></div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`${styles.indexedStep} ${
              accomplished ? styles.accomplished : null
            }`}
          ></div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`${styles.indexedStep} ${
              accomplished ? styles.accomplished : null
            }`}
          ></div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`${styles.indexedStep} ${
              accomplished ? styles.accomplished : null
            }`}
          ></div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default ProgressBarComponent;
