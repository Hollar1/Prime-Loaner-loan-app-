import React from "react";
import styles from "../button/button.module.scss";
function Button({ children }) {
  return (
    <div className={styles.wrapper}>
      <button>{children}</button>
    </div>
  );
}

export default Button;
