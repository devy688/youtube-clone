import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.menu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={styles["logo__icon"]}>
          <img className={styles.img} src="images/logo.png" alt="logo" />
          <h1 className={styles.title}>Youtube</h1>
        </div>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        ></input>
        <button type="submit" className={styles.button} onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="images/search.png"
            alt="search"
          />
        </button>
      </div>
      <button className={styles.login}>
        <i className="far fa-user-circle"></i>
        <span className={styles["login__title"]}>LogIn</span>
      </button>
    </header>
  );
});

export default SearchHeader;
