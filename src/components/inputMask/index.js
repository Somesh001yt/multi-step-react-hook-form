import React from "react";
import InputMask from "react-input-mask";
import styles from "./inputMask.module.scss";
import { Controller, useFormState } from "react-hook-form";

const TimerInput = ({  src, label , type , step, name , control, required }) => {
    const state = useFormState({ control, name });
  return (
    <div>
     <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field }) => (

    <div className={styles.inputBox}>
      <label className={styles.title}>{label}</label>
      <div className={styles.inputMaskDiv}>
        <img className={styles.inputImg} src={src} />
        <InputMask
          className={styles.inputMask}
          type={type}
          name={name} 
          step={step}
          {...field}
        />
      </div>
    </div>
      )}
      />
    </div>
  );
};

export default TimerInput;
