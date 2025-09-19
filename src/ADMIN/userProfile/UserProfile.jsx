import SideBar from "../compo_nets/sideBar/SideBar";
import styles from "../userProfile/userProfile.module.scss";
import male_icon from "../../assets/images/male_icon.webp";
import Sub_navBar from "../compo_nets/sub_navBar/Sub_navBar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function UserProfile() {
  const [isFocus, setIsFocus] = useState("details");

  const [confirmCashPayment, setConfirmCashPayment] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.parent_wrapper}>
      <SideBar />
      <Sub_navBar pageHeader={"User Profile"} />
      <div className={styles.wrapper}>
        {confirmCashPayment && (
          <section className={styles.sec_00}>
            <aside>
              <h3>Enter Details</h3>
              <label htmlFor="">
                <p>
                  {" "}
                  Your Name <span>(staff)</span>
                </p>
                <input type="text" />
              </label>
              <label htmlFor="">
                Amount You Collected <input type="text" />
              </label>
              <label htmlFor="">
                Date{" "}
                <input
                  type="date"
                  name="today"
                  id="date"
                  value={today}
                  max={today}
                  min={today}
                  onChange={(e) => setPaymentDate(e.target.value)}
                  disabled
                />
              </label>

              <div>
                <button>Confirm</button>
                <button onClick={() => setConfirmCashPayment(false)}>
                  Cancel
                </button>
              </div>
            </aside>
          </section>
        )}
        <section className={styles.sec_01}>
          <article>
            <img src={male_icon} alt="" />
            <div>
              <strong>Umar Abdulkareem</strong>
              <p>ID: #12345B</p>
            </div>
          </article>
          <aside>
            <button>Edit Details</button>
            <button>Add Note</button>
          </aside>
        </section>
        <section className={styles.sec_02}>
          <button
            className={isFocus === "details" ? styles.isFocus : null}
            onClick={() => setIsFocus("details")}
          >
            Details
          </button>
          <button
            className={isFocus === "loans" ? styles.isFocus : null}
            onClick={() => setIsFocus("loans")}
          >
            Loans
          </button>
          <button
            className={isFocus === "payments" ? styles.isFocus : null}
            onClick={() => setIsFocus("payments")}
          >
            Payments
          </button>
        </section>
        {isFocus === "details" ? (
          <section className={styles.sec_03}>
            <article>
              <h3>Personal Details</h3>

              <aside>
                <div>
                  <p>Full Name</p>
                  <strong>Umar Abdulkareem</strong>
                </div>
                <div>
                  <p>Phone Number</p>
                  <strong>07067276727</strong>
                </div>
                <div>
                  <p>Email</p>
                  <strong>ayenihola@yahoo.com</strong>
                </div>
                <div>
                  <p>Date of Birth</p>
                  <strong>17/04/1987</strong>
                </div>
                <div>
                  <p>Gender</p>
                  <strong>Male</strong>
                </div>
                <div>
                  <p>Occupation</p>
                  <strong>Driver</strong>
                </div>
              </aside>
            </article>

            <article>
              <h3>Collateral Details</h3>

              <aside>
                <div>
                  <p>Type</p>
                  <strong>Land Document</strong>
                </div>
                <div>
                  <p>Value / Worth</p>
                  <strong>₦3,000,000</strong>
                </div>
              </aside>
            </article>

            <article>
              <h3>Residential Address</h3>
              <aside>
                <div>
                  <p>Address</p>
                  <strong>Umar Abdulkareem</strong>
                </div>
                <div>
                  <p>LGA</p>
                  <strong>07067276727</strong>
                </div>
                <div>
                  <p>State</p>
                  <strong>ayenihola@yahoo.com</strong>
                </div>
                <div>
                  <p>Country</p>
                  <strong>17/04/1987</strong>
                </div>
              </aside>
              <nav>
                “Just ask for No. 12 Alhaji Kareem Crescent, it’s off Iyana Odo
                Road in Ejigbo, Lagos. Once you get to Iyana Odo, enter the
                crescent beside that big yellow filling station – the one close
                to the transformer. My street is the second turning on the
                right. My house is a cream and coffee brown bungalow with a red
                roof and a black gate. It’s the third house on the left after
                you enter the street. The compound is paved with interlocking
                tiles, and there's a small security house by the gate. We have a
                big black water tank on a stand—you won't miss it.
              </nav>
            </article>

            <article>
              <h3>Guarantor Information</h3>

              <aside>
                <div>
                  <p>Full Name</p>
                  <strong>Bankole Ogungbemi</strong>
                </div>
                <div>
                  <p>Gender</p>
                  <strong>Male</strong>
                </div>
                <div>
                  <p>Occupation</p>
                  <strong>Business</strong>
                </div>
                <div>
                  <p>Phone Number</p>
                  <strong>07067276727</strong>
                </div>
                <div>
                  <p>Home Address</p>
                  <strong>
                    f/ab16,iku, Quarter's Ikare-Akoko, Ondo State.
                  </strong>
                </div>
                <div>
                  <p>Country</p>
                  <strong>
                    28, Adegunju Chapel, Okota Street, Off Jokotade Road.
                  </strong>
                </div>
              </aside>
            </article>
          </section>
        ) : null}
        {isFocus === "loans" ? (
          <section className={styles.sec_04}>
            <h3>Loan Overview</h3>

            <article>
              <aside>
                <p>Borrower Name</p>
                <strong>Saheed Korede</strong>
              </aside>

              <aside>
                <p>Loan Type</p>
                <strong>Rickshaw</strong>
              </aside>
              <aside>
                <p>Loan Amount</p>
                <strong>₦6,500,000</strong>
              </aside>

              <aside>
                <p>Disbursed Date</p>
                <strong>24-Jan-2025</strong>
              </aside>
              <aside>
                <p>Interest Rate</p>
                <strong>35%</strong>
              </aside>
              <aside>
                <p>Plate Number Cost</p>
                <strong>₦80,000</strong>
              </aside>
              <aside>
                <p>Loan Term</p>
                <strong>24 months</strong>
              </aside>

              <aside>
                <p>Tracker Cost</p>
                <strong>₦55,000</strong>
              </aside>

              <aside>
                <p>Total Amount to Repay</p>
                <strong>₦8,555,000</strong>
              </aside>

              <aside>
                <p>
                  Plate Number:
                  <strong> CP12345L</strong>
                </p>

                <p>
                  Tracker;
                  <strong> TR09867980PL</strong>
                </p>
              </aside>
              <aside>
                <p>Total Paid</p>
                <strong>₦8,555,000</strong>
              </aside>
              <aside>
                <p>Total Remaining</p>
                <strong>₦8,555,000</strong>
              </aside>
              {/* <aside>
                <p>
                  Total Amount to Repay: <strong>₦8,555,000</strong>
                </p>
              </aside> */}
            </article>

            <h3>Repayment Schedule</h3>

            <article className={styles.payment_schedule}>
              <aside>
                <strong>Payment-01</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-02</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-03</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-04</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-05</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-06</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-07</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-08</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-09</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-10</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-11</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-12</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-13</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-14</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-15</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-16</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-17</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-18</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-19</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-20</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-21</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-22</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-23</strong>
                <p>Due: 24-05-2025</p>
              </aside>

              <aside>
                <strong>Payment-24</strong>
                <p>Due: 24-05-2025</p>
              </aside>
            </article>
          </section>
        ) : null}{" "}
        {isFocus === "payments" ? (
          <section className={styles.sec_05}>
            <article>
              <h3>Loan Payment History</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Amount Paid</th>
                    <th>Remaining Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                  </tr>
                </tbody>
              </table>
            </article>

            <article>
              <h3>Remaining Months Payment</h3>
              <table>
                <thead>
                  <tr>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Card Payment</th>
                    <th>Cash Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>October 28,2023</td>
                    <td>October 28,2023</td>
                    <td>
                      <button>Make Payment</button>
                    </td>
                    <td>
                      <button onClick={() => setConfirmCashPayment(true)}>
                        Enter Details
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </article>
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default UserProfile;
