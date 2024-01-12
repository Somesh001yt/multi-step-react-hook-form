import React from "react";
import InputMask from "react-input-mask";
import styles from "./inputMask.module.scss";
import { Controller, useFormState } from "react-hook-form";

const TimerInput = ({
  src,
  label,
  type,
  step,
  name,
  control,
  required,
  value,
  style,
  placeholder,
  showCurrencyMask,
  onChange
}) => {
  const state = useFormState({ control, name });
 

  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <div className={styles.inputBox} style={style}>
            <label className={styles.title}>{label}</label>
            <div className={styles.inputMaskDiv}>
              <img className={styles.inputImg} src={src} />
              {showCurrencyMask ? (
                <InputMask
                  className={styles.inputMask}
                  type={type}
                  name={name}
                  step={step}
                  placeholder={placeholder}
                  mask="99.99 €"
                  maskChar="0"
                  alwaysShowMask
                  value={field.value} 
                  onChange={onChange}
                  {...field}
                />
              ) : (
                <InputMask
                  className={styles.inputMask}
                  type={type}
                  name={name}
                  defaultValue={value}  
                  step={step}
                  value={field.value} 
                  placeholder={placeholder}
                  onChange={onChange}
                  {...field}
                />
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default TimerInput;
