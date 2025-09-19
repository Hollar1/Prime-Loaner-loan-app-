import SideBar from "../../ADMIN/compo_nets/sideBar/SideBar";
import Nav_bar from "../../ADMIN/compo_nets/nav_bar/Nav_bar";
import styles from "../applications/applications.module.scss";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function Applications() {
  const navigate = useNavigate();
  return (
    <div className={styles.parent_wrapper}>
      <Nav_bar />
      <SideBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_02}>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Loan Type</th>
                <th>Submission date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Umar Abdulkareem</td>
                <td>Motor Bike</td>
                <td>12, January 2025</td>
                <td>
                  <div className={styles.pending}>Pending</div>
                </td>
                <td>
                  <button onClick={() => navigate("/application-details")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>Kolade Omojokotade</td>
                <td>Rickshaw</td>
                <td>2, May 2025</td>
                <td>
                  <div className={styles.in_review}>In Review</div>
                </td>
                <td>
                  <button onClick={() => navigate("/application-details")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>Wasiu Kolade</td>
                <td>Car</td>
                <td>2, May 2025</td>
                <td>
                  <div className={styles.approved}>Approved</div>
                </td>
                <td>
                  <button onClick={() => navigate("/application-details")}>
                    View Details
                  </button>
                </td>
              </tr>

              <tr>
                <td>Kajogbola Fatai</td>
                <td>Business</td>
                <td>2, May 2025</td>
                <td>
                  <div className={styles.declined}>Declined</div>
                </td>
                <td>
                  <button onClick={() => navigate("/application-details")}>
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}

export default Applications;
