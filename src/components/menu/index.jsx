import React from "react";
import styles from "./menu.module.scss";
import { listItem } from "./menuList";
import { useNavigate, useLocation } from "react-router-dom";


import Logo from '../../assests/menuIcons/logo.png'

const MenuComponent =({ show, toggleMenu }) => {

  console.log(show)

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigations = (item) => {
    navigate(item.link);

  };


  return (
    <div className={`${styles.menu} ${show ? styles.open : ""}`}>
      <div className={styles.menuList}>
        <div className={styles.header}>
          <img className={styles.image} src={Logo} alt="logo" />
          <h2 className={styles.heading}>Arace App</h2>
        </div>
        {listItem?.map((item, index) => {
          return (
            <div className={`${styles.menuContainer} ${pathname === item.link ? styles.active : ""}`} onClick={() => {
              handleNavigations(item);
            }}>
            <div className={styles.menuItem} key={index}  >
              <img className={styles.menuIcon} src={item.src} alt="" />
              <p className={styles.menuName}>{item.name}</p>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuComponent;
