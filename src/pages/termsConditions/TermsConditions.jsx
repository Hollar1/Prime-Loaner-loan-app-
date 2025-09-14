import styles from "../termsConditions/termsConditions.module.scss";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
function TermsConditions() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Terms Of Service"} />
      <div className={styles.wrapper}>
        <header>
          <h3>Terms And Conditions</h3>
          <p>
            Welcome to our loan service. By using our services, you agree to the
            following terms and conditions. Please read them carefully.
          </p>
        </header>

        <article className={styles.article_01}>
          <section>
            <h3>1. User Obligations</h3>
            <p>
              {" "}
              You agree to provide accurate information and comply with all
              applicable laws and regulations. You are responsible for
              maintaining the confidentiality of your account
            </p>
          </section>

          <section>
            <h3>2. Loan Agreement</h3>
            <p>
              Each loan is governed by a separate agreement detailing the loan
              amount, interest rate, repayment schedule, and other terms. By
              accepting a loan, you agree to these terms.
            </p>
          </section>

          <section>
            <h3>3. Repayment Terms</h3>
            <p>
              {" "}
              You must repay the loan according to the agreed schedule. Late
              payments may incur additional fees and affect your credit rating.
            </p>
          </section>

          <section>
            <h3>4. Default</h3>
            <p>
              {" "}
              Failure to repay the loan as agreed constitutes default. We may
              take legal action to recover the outstanding amount, including
              using debt collection agencies.
            </p>
          </section>

          <section>
            <h3>5. Dispute Resolution</h3>
            <p>
              {" "}
              Any disputes will be resolved through mediation or arbitration in
              accordance with Nigerian law. The venue for any legal proceedings
              will be Ilorin, Kwara State, Nigeria.
            </p>
          </section>

          <section>
            <h3>6. Limitation of Liability</h3>
            <p>
              {" "}
              We are not liable for any indirect, incidental, or consequential
              damages arising from your use of our services. Our liability is
              limited to the loan amount.
            </p>
          </section>
        </article>

        <article className={styles.article_02}>
          <h3> Failure To Make Payment </h3>
          <p>
            In the event of a missed payment or failure to make a payment, the
            following procedures and penalties will apply:
          </p>

          <h5>Interest Increments:</h5>
          <p>
            For each day a payment is late, a penalty interest rate of 0.5% per
            day will be applied to the outstanding principal amount. This will
            continue to accrue until the full payment is made. Additional late
            payment fees may also apply as specified in your loan agreement.
          </p>
          <h5>Property Repossession Process:</h5>
          <p>
            If the loan is secured by property (e.g., a vehicle or equipment),
            and you default on your payments for a period of 30 consecutive
            days, we will initiate the repossession process.
          </p>

          <ul>
            <li>
              <span>Notice Period:</span>
              You will receive a written "Notice of Intent to Repossess" at
              least 14 days before any repossession action is taken. This notice
              will be delivered to your registered address and email.
            </li>

            <li>
              <span>Legal Procedures:</span>
              Repossession will be conducted in accordance with the laws of the
              Federal Republic of Nigeria. We will obtain a court order before
              repossessing any property. You will have the opportunity to
              present your case in court.
            </li>

            <li>
              <span>Post-Repossession:</span>
              After repossession, you will have a 14-day redemption period to
              pay the outstanding balance, including all accrued interest and
              repossession costs, to reclaim your property. If you fail to do
              so, the property will be sold to recover the debt. Any surplus
              from the sale will be returned to you, and you will be liable for
              any shortfall.
            </li>
          </ul>
        </article>
        <button>I Agree</button>
      </div>
    </div>
  );
}

export default TermsConditions;
