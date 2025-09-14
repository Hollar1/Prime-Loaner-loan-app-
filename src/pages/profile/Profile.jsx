import NavBar from "../../components/navBar/NavBar";
import styles from "../profile/profile.module.scss";
import male_icon from "../../assets/images/male_icon.webp";
import female_icon from "../../assets/images/female_icon.webp";
import { Line, Circle } from "rc-progress";
import back_icon from "../../assets/icons/back_icon.png";

import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdKeyboardArrowDown,
  MdCalendarMonth,
} from "react-icons/md";
import { useState } from "react";

function Profile() {
  const [showPayment_history, setShowPayment_history] = useState(false);

  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Profile"} />
    
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={male_icon} alt="" />
          <div>
            <strong>Umar Kareem</strong>
            <p>Bike Loan</p>
            <span>Joined: april 2025</span>
          </div>
          {/* <button>Edit Profile</button> */}
        </section>

        <section className={styles.sec_02}>
          <h3>Account</h3>
          <article>
            <aside>
              <MdOutlineMail />{" "}
            </aside>
            <div>
              <strong>Email</strong>
              <p>abdulkareemumar1989@gmail.com</p>
            </div>
          </article>
          <nav></nav>
          <article>
            <aside>
              <MdOutlinePhone />
            </aside>
            <div>
              <strong>Phone</strong>
              <p>09087125678</p>
            </div>
          </article>
          <nav></nav>
          <article>
            <aside>
              <MdOutlineLocationOn />
            </aside>
            <div>
              <strong>Address</strong>
              <p>29a Olorunsogo Streen,Laduba, Ilorin Kwara State.</p>
            </div>
          </article>
        </section>

        <section className={styles.sec_03}>
          <h3>Current Loan Status</h3>

          <article>
            <div className={styles.payment_div}>
              <div className={styles.totalLoan}>
                <p>Total Loan:</p>
                <strong>$5,000</strong>
              </div>

              <div className={styles.progressBar}>
                <Line
                  percent={70}
                  strokeWidth={4}
                  strokeColor="#00ff00"
                  trailWidth={4}
                />
              </div>

              <div className={styles.RemainingBalance}>
                <p>Balance:</p>
                <strong>$1,200</strong>
              </div>
            </div>

            <div className={styles.payment_date_div}>
              <span>Next payment Due</span>
              <p>June 15 2025</p>
              <button>Pay Now</button>
            </div>
          </article>
        </section>

        <section className={styles.sec_04}>
          <h3>Payment History</h3>
          <article>
            <div>
              <MdCalendarMonth />
            </div>
            <p>Previous Monthly Payment</p>
            <span onClick={() => setShowPayment_history(!showPayment_history)}>
              <MdKeyboardArrowDown />
            </span>
          </article>

          {showPayment_history && (
            <div>
              <main>
                <aside>
                  <strong>$240.00</strong>
                  <p>March 15, 2025</p>
                </aside>
                <span>5 of 6 months</span>
              </main>

              <main>
                <aside>
                  <strong>$240.00</strong>
                  <p>February 15, 2025</p>
                </aside>
                <span>4 of 6 months</span>
              </main>

              <main>
                <aside>
                  <strong>$240.00</strong>
                  <p>January 15, 2025</p>
                </aside>
                <span>3 of 6 months</span>
              </main>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Profile;
