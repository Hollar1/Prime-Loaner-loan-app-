import React from "react";
import styles from "../button/button.module.scss";
function Button({ children, onClick, type }) {
  return (
    <div className={styles.wrapper}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;

export const Cancel_button = ({ children, type, onClick }) => {
  return (
    <div className={styles.wrapper_B}>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
