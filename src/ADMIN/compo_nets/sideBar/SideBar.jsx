import styles from "../sideBar/sideBar.module.scss";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { SiGoogleforms } from "react-icons/si";
import { FaNairaSign } from "react-icons/fa6";
import { MdPreview, MdOutlineTextsms } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

import {
  TbCurrencyNaira,
  TbUsersGroup,
  TbSettings,
  TbLogout2,
} from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  console.log(pathname);
  const check_pathname = (pathName) => pathname === pathName;

  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <header>
          <HiOutlineBuildingLibrary fontSize={28} color="#1173d4" />
          <h3>Prime Loner</h3>
        </header>

        <section className={styles.sec_01}>
          <div
            className={check_pathname("/home-page") ? styles.isFocus : null}
            onClick={() => navigate("/home-page")}
          >
            <FaNairaSign fontSize={23} />
            <strong>Borrowers</strong>
          </div>

          <div
            className={check_pathname("/applications") ? styles.isFocus : null}
            onClick={() => navigate("/applications")}
          >
            <SiGoogleforms fontSize={23} />
            <strong>Application(s)</strong>
          </div>

          <div
            className={check_pathname("/all-users") ? styles.isFocus : null}
            onClick={() => navigate("/all-users")}
          >
            <TbUsersGroup fontSize={23} />
            <strong>All Users</strong>
          </div>

          <div
            className={check_pathname("/loans") ? styles.isFocus : null}
            onClick={() => navigate("/loans")}
          >
            <FaRegCreditCard fontSize={20} />
            <strong>Loans Details</strong>
          </div>

          <div
            className={check_pathname("/overview") ? styles.isFocus : null}
            onClick={() => navigate("/overview")}
          >
            <MdPreview fontSize={23} />
            <strong>Overview</strong>
          </div>

          <div
            className={check_pathname("/send-sms") ? styles.isFocus : null}
            onClick={() => navigate("/send-sms")}
          >
            <MdOutlineTextsms fontSize={23} />
            <strong>Send SMS</strong>
          </div>

          <div
            className={check_pathname("/settings") ? styles.isFocus : null}
            onClick={() => navigate("/settings")}
          >
            <TbSettings fontSize={23} />
            <strong>Settings</strong>
          </div>
        </section>

        <section
          className={styles.sec_02}
          onClick={() => navigate("/notifications")}
        >
          <FaRegBell size={25} />
        </section>

        <section className={styles.sec_03}>
          <button>
            {" "}
            <TbLogout2 fontSize={25} />
            Log Out
          </button>
        </section>
      </div>
    </div>
  );
}

export default SideBar;
