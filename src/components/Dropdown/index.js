import React from "react";
import Select from "react-select";
import styles from "./dropdown.module.scss";
import { Controller , useFormState} from "react-hook-form";

const DropDown = ({ label, control, name, options }) => {
    const state = useFormState({ control, name });
  return (
    <div className={styles.dropdown}>
      <div className={styles.content}>
        <label className={styles.label}>{label}</label>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Select
              className="select2-selection"
              name={name}
              options={options || []}
             
              onBlur={onBlur}
            
            />
          )}
        />
      </div>
    </div>
  );
};

export default DropDown;
