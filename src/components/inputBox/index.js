import React, { useMemo } from "react";
import { Controller, useFormState } from "react-hook-form";
import styles from "./inputBox.module.scss";

import Phone from '../../assests/phone.png'

const Input = ({ label, type, name, control, required, placeholder, src , width}) => {
  const state = useFormState({ control, name });
  const isErrorExist = useMemo(() => Boolean(state.errors[name]), [state]);
  const errorMessage = useMemo(
    () => state.errors[name]?.message || undefined,
    [state]
  );

  return (
    <div>
      <Controller
        control={control}
        name={name}
        rules={{ required: required }}
        render={({ field }) => (
          <div className={styles.inputBox} style={{ width: width }}>
            {label && (
              <label className={styles.title}>
                {label}
              </label>
            )}
            <div className={styles.cover}>  
                <img className={styles.inputIcon} src={src}/>
              <input
                className={styles.formControl}
                type={type}
                name={name} 
                control={control}
                placeholder={placeholder}
                {...field}
              />
            </div>

            {isErrorExist && (
              <small className={styles.error}>{errorMessage}</small>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Input;
