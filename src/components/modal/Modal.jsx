import styles from "../../components/modal/modal.module.scss";
import NavBar from "../navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import checked_icon from "../../assets/icons/checked_icon.png";
import Button, { Cancel_button } from "../button/Button";
function Modal() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Submitted"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <img src={checked_icon} alt="" />
        </section>

        <section className={styles.sec_02}>
          <h3>Application Submitted Successfully</h3>
          <p>
            Your application has been successfully submitted. Please keep your
            reference number for future inquiries.
          </p>
        </section>
        <section className={styles.sec_03}>
          <p>Reference:</p> <strong>REF-2024-07-15-12345</strong>
        </section>

        <section className={styles.sec_04}>
          <h3>What's next ?</h3>
          <p>
            We are currently reviewing your application. You will receive a
            notification within <strong>2-3 Business days</strong> via email and
            SMS with the status of your application.
          </p>
        </section>
        <section className={styles.sec_05}>
          <Button children={"View Application Status"} />
        </section>
        <section className={styles.sec_06}>
          <Cancel_button children={"Return to Home"} />
        </section>
      </div>
    </div>
  );
}

export default Modal;

export const FailedModal = ({ header, body }) => {
  return (
    <div className={styles.failed_parent_div}>
      <div className={styles.failed_div_wrapper}>
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};
