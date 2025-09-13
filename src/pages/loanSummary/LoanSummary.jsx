import styles from "../loanSummary/loanSummary.module.scss";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import Button, { Cancel_button } from "../../components/button/Button";
function LoanSummary() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Loan Summary"} />
      <div className={styles.wrapper}>
        <header>
          <h3>Motor Bike Loan</h3>
          <p>
            Please review the details of your loan. If everything looks correct,
            proceed to the next step to complete your application.
          </p>
        </header>
        <section className={styles.sec_01}>
          <div>
            <p>Loan Amount</p>
            <strong>₦1,300,000</strong>
          </div>

          <div>
            <p>Interest Rate</p>
            <strong>35%</strong>
          </div>

          <div>
            <p>Loan Term</p>
            <strong>6 months</strong>
          </div>

          <div>
            <p>Monthly Pay</p>
            <strong>₦1,300,000</strong>
          </div>

          <div>
            <p>Total Payment</p>
            <strong style={{ color: "#510404" }}>₦1,300,000</strong>
          </div>
        </section>
        <section className={styles.sec_02}>
          <Button children={"Submit Application"} type={"submit"} />
        </section>
        <section className={styles.sec_03}>
          <Cancel_button children={"Cancel Application"} />
        </section>
      </div>
    </div>
  );
}

export default LoanSummary;
