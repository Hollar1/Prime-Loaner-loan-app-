import styles from "../input/input.module.scss";

function Input({ label_text }) {
  return (
    <div className={styles.wrapper}>
      <label>
        {label_text}
        <input type="text" />
      </label>
    </div>
  );
}

export default Input;



