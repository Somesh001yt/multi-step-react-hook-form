import React from "react";
import styles from "./button.module.scss";


const ButtonBox = (props) => {
  return (
    <>
      {props.label && (
        <button
          type={props.type ? props.type : "button"}
          disabled={ props.loader}
          onClick={props?.click}
          style={props?.style}
          className={`${styles.btn} ${
            props?.primary ? styles.btnPrimary : styles.btnOutline
          } ${props?.class} ${props.disabled && styles.disabled}`}
        >
          { props.label}
        </button>
      )}
    </>
  );
};
export default ButtonBox;
