import styles from "../sideBar/sideBar.module.scss";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { CgMenuGridR } from "react-icons/cg";
import { SiGoogleforms } from "react-icons/si";
import { FaNairaSign } from "react-icons/fa6";
import { MdPreview, MdOutlineTextsms } from "react-icons/md";

import {
  TbCurrencyNaira,
  TbUsersGroup,
  TbSettings,
  TbLogout2,
} from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
function SideBar() {
  return (
    <div className={styles.parent_wrapper}>
      <div className={styles.wrapper}>
        <header>
          <HiOutlineBuildingLibrary fontSize={28} color="#1173d4" />
          <h3>Prime Loner</h3>
        </header>

        <section className={styles.sec_01}>
            
          <div>
            <FaNairaSign fontSize={23} />
            <strong>Borrowers</strong>
          </div>

          <div>
            <SiGoogleforms fontSize={23} />
            <strong>Application(s)</strong>
          </div>

          <div>
            <FaRegCreditCard fontSize={20} />
            <strong>Payments</strong>
          </div>

          <div>
            <TbUsersGroup fontSize={23} />
            <strong>All Users</strong>
          </div>

          <div>
            <MdPreview fontSize={23} />
            <strong>Overview</strong>
          </div>

          <div>
            <MdOutlineTextsms fontSize={23} />
            <strong>Send SMS</strong>
          </div>

          <div>
            <TbSettings fontSize={23} />
            <strong>Settings</strong>
          </div>
        </section>
        <section className={styles.sec_02}>
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
