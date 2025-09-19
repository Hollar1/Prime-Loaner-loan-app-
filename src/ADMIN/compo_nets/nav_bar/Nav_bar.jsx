import styles from "../../compo_nets/nav_bar/nav_bar.module.scss";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
function Nav_bar({ value }) {
  return (
    <div className={styles.wrapper}>
      <nav>
        <section className={styles.sec_01}>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <select name="" id=""></select>
          <select name="" id=""></select>
        </section>

        <section className={styles.sec_02}>
          <div>
            <strong>Abdulkareem Umar</strong>
            <p>abdulkareemumar1989@gmail,com</p>
          </div>
        </section>
      </nav>
    </div>
  );
}

export default Nav_bar;
