import NavBar from "../../components/navBar/NavBar";
import styles from "../profile/profile.module.scss";
import male_icon from "../../assets/images/male_icon.webp";
import female_icon from "../../assets/images/female_icon.webp";
import { Line, Circle } from "rc-progress";
import {
  MdOutlineMail,
  MdOutlinePhone,
  MdOutlineLocationOn,
  MdKeyboardArrowDown,
  MdCalendarMonth,
} from "react-icons/md";

function Profile() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={male_icon} alt="" />
          <strong>Umar Kareem</strong>
          <p>Bike Loan</p>
          <span>Joined: april 2025</span>
          <button>Edit Profile</button>
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
            <div>
              <Circle
                percent={70}
                strokeWidth={4}
                strokeColor="#00ff00"
                trailWidth={4}
              />

              <aside>
                <div>
                  <p>Total Loan</p>
                  <b>$5,000</b>
                </div>
                <hr />

                <div>
                  <p> Balance</p>
                  <b>$1,200</b>
                </div>
              </aside>
            </div>

            <div>
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
            <span>
              <MdKeyboardArrowDown />
            </span>
          </article>
          <hr />
          hhh
        </section>
      </div>
    </div>
  );
}

export default Profile;
