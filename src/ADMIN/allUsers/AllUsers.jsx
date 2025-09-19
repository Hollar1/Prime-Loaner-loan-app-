import styles from "../allUsers/allUsers.module.scss";
import SideBar from "../../ADMIN/compo_nets/sideBar/SideBar";
import Nav_bar from "../../ADMIN/compo_nets/nav_bar/Nav_bar";

function AllUsers() {
  return (
    <div className={styles.parent_wrapper}>
      <Nav_bar />
      <SideBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <table>
            <thead>
              <tr>
                <th>Full Name(s)</th>
                <th>Email</th>
                <th>Loan Type</th>
                <th>Loan Status</th>
                <th>Loan Terms</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Kamal Lawal</td>
                <td>lawalolajidekamal@gmail.com</td>
                <td>Car</td>
                <td>
                  <div className={styles.active}>Active</div>
                </td>
                <td>18 Months</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>

              <tr>
                <td>Bolakale Gbenga</td>
                <td>Bolakale123@gmail.com</td>
                <td>Business</td>
                <td>
                  <div className={styles.completed}>Completed</div>
                </td>
                <td>12 Months</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>

              <tr>
                <td>Yusuf Abdullahi</td>
                <td>YusufAbdullahi@gmail.com</td>
                <td>Business</td>
                <td>
                  <div className={styles.overdue}>Overdue</div>
                </td>
                <td>12 Months</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>

              <tr style={{ backgroundColor: "#f5f3f0" }}>
                <td>Orogun Fatimo</td>
                <td>OrogunFatimo3@gmail.com</td>
                <td>n/a</td>
                <td>
                  <div>n/a</div>
                </td>
                <td>n/a</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default AllUsers;
