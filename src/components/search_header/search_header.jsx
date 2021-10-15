import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Youtube</h1>
    </div>
    <input
      className={styles.input}
      type="search"
      placeholder="Search..."
    ></input>
    <button className={styles.button}>
      <img className={styles.buttonImg} src="/images/search.png" alt="search" />
    </button>
  </header>
);

export default SearchHeader;
