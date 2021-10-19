import React from "react";
import { SearchRounded } from "@material-ui/icons";
import styles from "./SearchInput.module.css";

const SearchInput = ({ ...res }) => {
  // console.log(res, "res");
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...res} />
    </div>
  );
};

export default SearchInput;
