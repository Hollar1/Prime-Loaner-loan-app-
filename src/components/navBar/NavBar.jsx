import { useNavigate } from "react-router-dom";
import styles from "../navBar/navBar.module.scss";
import { useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import { IoMdCloseCircle } from "react-icons/io";

function NavBar({ logo, companyName, pageHeader, bars, goBack, closeBars }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    }
  };

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.wrapper}>
      <nav>
        {logo && (
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        )}

        {goBack && (
          <button onClick={handleGoBack}>
            <img src={goBack} alt="" />
          </button>
        )}

        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.pageHeader}>{pageHeader}</div>

        <div className={styles.bars} onClick={handleShowMenu}>
          {showMenu ? closeBars : bars}
        </div>
      </nav>

      {showMenu && (
        <section className={styles.sec_01}>
          <button>Apply Loan</button>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>Our Policy</button>
          <button>Login</button>
        </section>
      )}
    </div>
  );
}

export default NavBar;
