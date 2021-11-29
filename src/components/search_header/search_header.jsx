import React, { memo, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch, setSelectedVideo }) => {
  const inputRef = useRef();
  const history = useHistory();

  const handleSearch = () => {
    onSearch(inputRef.current.value);
    history.push("/search");
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
      <div className={styles.start}>
        <div className={styles.menu}>
          <i className="fas fa-bars"></i>
        </div>
        <a className={styles.logo} href="/youtube-clone">
          <img
            className={styles.img}
            src="/youtube-clone/images/logo.png"
            alt="logo"
          />
          <h1 className={styles.title}>Youtube</h1>
        </a>
      </div>
      <div className={styles.search}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search"
          onKeyPress={onKeyPress}
        ></input>
        <button type="submit" className={styles.button} onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="/youtube-clone/images/search.png"
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
