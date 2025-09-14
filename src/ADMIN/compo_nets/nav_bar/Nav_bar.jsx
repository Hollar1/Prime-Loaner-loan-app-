import styles from "../../compo_nets/nav_bar/nav_bar.module.scss";
import { AiOutlineBars } from "react-icons/ai";
import { FaRegBell } from "react-icons/fa";
function Nav_bar() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <div>
          <AiOutlineBars />
        </div>
        <h3>Dashboard</h3>

        <main>
          <FaRegBell size={25} />
          <aside>
            <strong>Abdulkareem Umar</strong>
            <p>abdulkareemumar1989@gmail,com</p>
          </aside>
        </main>
      </nav>
    </div>
  );
}

export default Nav_bar;
