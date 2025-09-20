import SideBar from "../../ADMIN/compo_nets/sideBar/SideBar";
import Sub_navBar from "../../ADMIN/compo_nets/sub_navBar/Sub_navBar";
import styles from "../overview/overview.module.scss";

function Overview() {
  return (
    <div className={styles.parent_wrapper}>
      <SideBar />
      <Sub_navBar pageHeader={"Overview"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <h3>
            Active Loans <span>(approved and Disbursed )</span>
          </h3>

          <article>
            <div>
              <p>Car Loan</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Rickshaw</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Motor Bike</p>
              <strong>300</strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_02}>
          <h3>
            Pending Loans <span>(waiting for approval)</span>
          </h3>

          <article>
            <div>
              <p>Car Loan</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Rickshaw</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Motor Bike</p>
              <strong>300</strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_03}>
          <h3>
            Overdue Loans <span>(late payment)</span>{" "}
          </h3>
          <article>
            <div>
              <p>Car Loan</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Rickshaw</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Motor Bike</p>
              <strong>300</strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_03}>
          <h3>
            Completed Loans <span>(old client, finish payment)</span>
          </h3>
          <article>
            <div>
              <p>Car Loan</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Rickshaw</p>
              <strong>300</strong>
            </div>
            <div>
              <p>Motor Bike</p>
              <strong>300</strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_04}>
          <h3>
            Loan Transactions Summary <span>(payment record)</span>
          </h3>
          <article>
            <div>
              <p>Total Cash Inflow</p>
              <strong>₦29,170,000</strong>
            </div>
            <div>
              <p>Total Cash Outflow</p>
              <strong>₦42,900,000</strong>
            </div>
            <div>
              <p>Total Loan Requests (waiting...)</p>
              <strong>₦19,300,000</strong>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Overview;
