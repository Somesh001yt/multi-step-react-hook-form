import React from "react";
import Input from "../inputBox/index";
import styles from "./generalInfo.module.scss";

import Calendar from "../../assests/calendar.svg";
import Image from "../../assests/text-input.svg";


const GeneralInfo = ({ control }) => {
  return (
    <div className={styles.card}>
      <div className={styles.inputComponent}>
        <img src={Image} />
        <div>
          <span className={styles.id}>ID</span>
          <p>0003001S</p>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
    <Input
          label="Pickup Date"
          type="datetime-local"
          required={true}
          name="dateTime"
          control={control}
          placeholder={"Select your date"}
        /> 
       
      </div>
    </div>
  );
};

export default GeneralInfo;
