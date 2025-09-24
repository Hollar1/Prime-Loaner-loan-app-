import NavBar from "../../components/navBar/NavBar";
import styles from "../paymentHistory/paymentHistory.module.scss";
import back_icon from "../../assets/icons/back_icon.png";
import { Line, Circle } from "rc-progress";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
function PaymentHistory() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Payment History"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <div>
            <Line
              percent={70}
              strokeWidth={4}
              strokeColor="#00ff00"
              trailWidth={4}
            />
          </div>

          <article>
            <div>
              <aside>
                <p>Paid</p>
                <strong>₦1,200,000</strong>
              </aside>
              <aside>
                <p>Balance</p>
                <strong>₦4,000,000</strong>
              </aside>
            </div>

            <div>
              <aside>
                <p>Total Loan Amount</p>
                <strong>₦8,000,00</strong>
              </aside>
            </div>
          </article>
        </section>
        <section className={styles.sec_02}>
          <button>Paid</button>
          <button>Schedule</button>
        </section>
        <section className={styles.sec_03}>
          <article>
            <div>
              <IoCloseCircleOutline size={25} color="red" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>

          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
          <article>
            <div>
              <FaRegCheckCircle size={22} color="green" />
              <header>
                <strong>May 2025</strong>
                <p>paid on 06/15/2025</p>
              </header>
            </div>
            <strong>₦120,000</strong>
          </article>
        </section>
      </div>
    </div>
  );
}

export default PaymentHistory;
