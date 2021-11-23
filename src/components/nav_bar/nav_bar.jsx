import React, { memo } from "react";
import styles from "./nav_bar.module.css";

const NavBar = memo((props) => (
  <>
    <div className={styles.menu}>
      <i className="fas fa-home"></i>
      <span className={styles.name}>홈</span>
    </div>
    <div className={styles.menu}>
      <i className="far fa-compass"></i>
      <span className={styles.name}>탐색</span>
    </div>
    <div className={styles.menu}>
      <i className="fas fa-folder-open"></i>
      <span className={styles.name}>구독</span>
    </div>
  </>
));

export default NavBar;
