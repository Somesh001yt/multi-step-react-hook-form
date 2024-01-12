import React, { useState } from "react";
import styles from "./header.module.scss";
import Arrow from "../../assests/flip-backward.svg";
import HeaderIcon from "../../assests/menu-04.svg";

const Header = ({ onCall , show }) => {
    const [open, setOpen] = useState(false);
    const handleIcon = () => {
      setOpen(!open);
      onCall();
    };

  return (
    <div>
      <div className={styles.headers}>
        <div className={styles.headingDiv}>
          <div className={styles.imageDiv}>
            <img src={Arrow} />
          </div>
          <h4 className={styles.title}>New Job 0003301S</h4>
        </div>
        <div className={styles.imageDiv}>
        <div className={styles.hexagon}>
          <img className={styles.icon}  onClick={handleIcon} src={HeaderIcon} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
