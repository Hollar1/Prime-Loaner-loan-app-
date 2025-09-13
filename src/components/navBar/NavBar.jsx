import { useNavigate } from "react-router-dom";
import styles from "../navBar/navBar.module.scss";

function NavBar({ logo, companyName, pageHeader, bars, goBack }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    }
  };
  return (
    <div className={styles.wrapper}>
      <nav>
        {logo && (
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        )}

        <button onClick={handleGoBack}>
          <img src={goBack} alt="" />
        </button>

        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.pageHeader}>{pageHeader}</div>
        <div className={styles.bars}>{bars}</div>
      </nav>
    </div>
  );
}

export default NavBar;
