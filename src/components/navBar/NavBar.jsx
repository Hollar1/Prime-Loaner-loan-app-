import styles from "../navBar/navBar.module.scss";
function NavBar({ logo, companyName, pageHeader, bars }) {
  return (
    <div className={styles.wrapper}>
      <nav>
        {logo && (
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
        )}
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.pageHeader}>{pageHeader}</div>
        <div className={styles.bars}>{bars}</div>
      </nav>
    </div>
  );
}

export default NavBar;
