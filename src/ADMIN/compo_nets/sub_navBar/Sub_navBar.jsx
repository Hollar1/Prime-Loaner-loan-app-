import styles from "../../../ADMIN/compo_nets/sub_navBar/sub_navBar.module.scss";
import { FaRegBell } from "react-icons/fa6";
import female_icon from "../../../assets/images/female_icon.webp";
function Sub_navBar({ pageHeader }) {
  return (
    <div className={styles.wrapper}>
      <nav>
        <h3>{pageHeader}</h3>

        <div>
          <FaRegBell fontSize={25} />
          <aside>
            <img src={female_icon} alt="" />
            <strong>Admin</strong>
          </aside>
        </div>
      </nav>
    </div>
  );
}

export default Sub_navBar;
