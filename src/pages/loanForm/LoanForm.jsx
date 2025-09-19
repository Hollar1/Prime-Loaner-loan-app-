import styles from "../loanForm/loanForm.module.scss";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Whatsapp from "../../components/whatsapp/Whatsapp";
import { useNavigate } from "react-router-dom";
import LoanSummary from "../loanSummary/LoanSummary";
import { useState } from "react";
function LoanForm() {
  const navigate = useNavigate();
  const [showLoanSummary, setShowLoanSummary] = useState(false);
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Application Form"} />

      {showLoanSummary && <LoanSummary />}
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <div>
            <span>Step 1 of 3</span>
            <p>33% Complete</p>
          </div>

          <div>
            <aside></aside>
          </div>
        </section>

        <section className={styles.sec_02}>
          <h3>Personal Information</h3>
          <p>This information will be used to verify your identity.</p>
          <div>
            <Input label_text={"Full Name"} />
          </div>
          <div>
            <Input label_text={"Phone Number"} />
          </div>
          <div>
            <Input label_text={"Email"} />
          </div>
          <div>
            <Input label_text={"Occupation"} />
          </div>

          <div>
            <Input label_text={"Daily Income"} />
          </div>
        </section>
        <hr />
        <section className={styles.sec_02}>
          <h3>Residential Details</h3>
          <p>We need this to verify your address.</p>
          <div>
            <Input label_text={"House Status"} />
          </div>
          <div>
            <Input label_text={"House Number/Name"} />
          </div>
          <div>
            <Input label_text={"Street"} />
          </div>
        </section>

        <section className={styles.select_sec}>
          <label>
            Town/Village
            <input type="text" />
          </label>
          <label>
            State
            <input type="text" />
          </label>
        </section>
        <section className={styles.select_sec}>
          <label>
            LGA
            <input type="text" />
          </label>
          <label>
            Country
            <input type="text" />
          </label>
        </section>
        <section className={styles.textarea}>
          <textarea placeholder="Provide detailed directions to your house."></textarea>
        </section>
        <hr />

        <section className={styles.sec_02}>
          <h3>Documents Upload</h3>
          <p>We need this to confirmed your identity.</p>
          <section className={styles.upload_sec}>
            <label>
              NIN Slip (only)
              <input type="file" />
            </label>

            <label>
              Utility Bill
              <input type="file" />
            </label>

            <label>
              Full Picture
              <input type="file" placeholder="Upload your full picture" />
            </label>
          </section>
        </section>

        <section className={styles.sec_03}>
          <Button
            type={"submit"}
            children={"Proceed"}
            onClick={() => setShowLoanSummary(true)}
          />
        </section>
      </div>
    </div>
  );
}

export default LoanForm;
