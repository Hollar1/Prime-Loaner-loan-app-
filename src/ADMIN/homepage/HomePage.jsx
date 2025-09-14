import Nav_bar from "../compo_nets/nav_bar/Nav_bar";
import SideBar from "../compo_nets/sideBar/SideBar";
import styles from "../homepage/homePage.module.scss";

function HomePage() {
  return (
    <div className={styles.parent_wrapper}>
      <Nav_bar />
      <SideBar/>
      <div className={styles.wrapper}>
       
      </div>
    </div>
  );
}

export default HomePage;
