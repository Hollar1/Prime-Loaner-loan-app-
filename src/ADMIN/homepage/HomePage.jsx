import { useNavigate } from "react-router-dom";
import Nav_bar from "../compo_nets/nav_bar/Nav_bar";
import SideBar from "../compo_nets/sideBar/SideBar";
import styles from "../homepage/homePage.module.scss";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <Nav_bar />
      <SideBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <table>
            <thead>
              <tr>
                <th>Borrower</th>
                <th>Loan Type</th>
                <th>Plate Num.</th>
                <th>Tracking Num.</th>
                <th>Loan Total</th>
                <th>Paid</th>
                <th>Owing</th>

                <th>Terms</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Umar</td>
                <td>Bike</td>
                <td>CDK01234L</td>
                <td>#23504CC</td>
                <td>₦1,5000,000</td>
                <td>₦7,000</td>
                <td>₦8,000</td>

                <td>8 Months</td>
                <td onClick={() => navigate("/user-profile")}>
                  <button>Profile</button>
                </td>
              </tr>

              <tr>
                <td style={{ color: "brown" }}>Abdulkareem</td>
                <td>Rickshaw</td>
                <td>WDK81234Z</td>
                <td>#63704WQ</td>
                <td>₦3,5000,000</td>
                <td>₦1,5000,000</td>
                <td>₦2,200,000</td>
                <td>16 Months</td>
                <td onClick={() => navigate("/user-profile")}>
                  <button>Profile</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
