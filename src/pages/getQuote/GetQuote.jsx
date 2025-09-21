import styles from "../getQuote/getQuote.module.scss";
import NavBar from "../../components/navBar/NavBar";
import bike_01 from "../../assets/images/bikes/bike_01.png";
import rickshaw_01 from "../../assets/images/rickshaw/rickshaw_01.png";
import car_01 from "../../assets/images/cars/car_01.png";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import back_icon from "../../assets/icons/back_icon.png";
import Button from "../../components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function GetQuote() {
  const navigate = useNavigate();
  const location = useLocation();
  const selected_product = location?.state?.product;

  const productPrices = {
    car_loan: 9500000,
    rickshaw_loan: 4900000,
    motorbike_loan: 1400000,
  };

  const [showPaymentTerm, setShowPaymentTerm] = useState(false);
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);

  const [loanInfo, setLoanInfo] = useState({
    chosenProduct: selected_product || "",
    paymentTerm: "",
    paymentPlan: "",
    sub_payment: "",
    interest: "",
    totalToPay: "",
  });

  const handleShowPaymentTerm = () => {
    setShowPaymentPlan(false);
    setShowPaymentTerm(!showPaymentTerm);
  };

  const handleShowPaymentPlan = () => {
    setShowPaymentTerm(false);
    setShowPaymentPlan(!showPaymentPlan);
  };






  const handleSaveToLocalStorage = () => {
    const { chosenProduct, paymentTerm, paymentPlan, sub_payment, interest } =
      loanInfo;
    if (
      !chosenProduct ||
      !paymentTerm ||
      !paymentPlan ||
      !sub_payment ||
      !interest
    ) {
      alert("All fields are required!");
    } else {
      localStorage.setItem("loanInfo", JSON.stringify(loanInfo));
      navigate("/loan-form");
    }
  };

  const getLoanCalculations = (termMonths, price) => {
    const flatInterest = (35 / 100) * price;

    let totalInterest = flatInterest;
    if (termMonths > 6) {
      const monthlyFee = 50000 / 3;
      const totalFee = monthlyFee * termMonths;
      totalInterest += totalFee;
    }

    const totalLoan = price + totalInterest;

    return {
      interest: totalInterest,
      totalToPay: totalLoan,
      monthlyPayment: totalLoan / termMonths,
      weeklyPayment: totalLoan / (termMonths * 4),
      dailyPayment: totalLoan / (termMonths * 30),
    };
  };

  // Dynamic product price
  const price = productPrices[loanInfo.chosenProduct] || 0;

  // Calculate payments based on selected term
  const termMonths = parseInt(loanInfo.paymentTerm?.split(" ")[0]) || 0;
  const { dailyPayment, weeklyPayment, monthlyPayment } =
    termMonths && price ? getLoanCalculations(termMonths, price) : {};

  return (
    <div className={styles.parent_wrapper}>
      <NavBar logo={""} pageHeader={"Select Loan Type"} goBack={back_icon} />

      <div className={styles.wrapper}>
        <header>
          <h3>Choose Your Loan</h3>
        </header>

        <section className={styles.sec_01}>
          {["car_loan", "rickshaw_loan", "motorbike_loan"].map((productKey) => (
            <article
              key={productKey}
              onClick={() =>
                setLoanInfo({
                  ...loanInfo,
                  chosenProduct: productKey,
                })
              }
            >
              <img
                src={
                  productKey === "car_loan"
                    ? car_01
                    : productKey === "rickshaw_loan"
                    ? rickshaw_01
                    : bike_01
                }
                alt=""
              />
              <div>
                <strong>
                  {productKey === "car_loan"
                    ? "Car Loan"
                    : productKey === "rickshaw_loan"
                    ? "Rickshaw Loan"
                    : "Motor-Bike Loan"}
                </strong>
                <p>Price: ₦{productPrices[productKey].toLocaleString()}</p>
              </div>
              {loanInfo.chosenProduct === productKey ? (
                <FaRegCheckCircle className={styles.input} />
              ) : (
                <FaRegCircle className={styles.input} />
              )}
            </article>
          ))}
        </section>

        <hr />

        <section className={styles.sec_02}>
          <h3>Schedule Payment</h3>

          <main>
            <article>
              <span>Payment Term</span>
              <label>
                <div onClick={handleShowPaymentTerm}>
                  {loanInfo.paymentTerm || "--Select--"} <FaChevronDown />
                </div>
                {showPaymentTerm && (
                  <aside>
                    {[6, 9, 12, 15, 18, 21, 24].map((months) => {
                      const { interest, totalToPay } = getLoanCalculations(
                        months,
                        price
                      );
                      return (
                        <button
                          key={months}
                          onClick={() =>
                            setLoanInfo({
                              ...loanInfo,
                              interest,
                              totalToPay,
                              paymentTerm: `${months} months`,
                              sub_payment: "", // reset payment
                              paymentPlan: "",
                            })
                          }
                        >
                          {months} Months
                        </button>
                      );
                    })}
                  </aside>
                )}
              </label>
            </article>

            <article>
              <span>Payment Plan</span>
              <label>
                <div onClick={handleShowPaymentPlan}>
                  {loanInfo.paymentPlan || "--Select--"} <FaChevronDown />
                </div>
                {showPaymentPlan && (
                  <aside>
                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Daily",
                          sub_payment: dailyPayment,
                        })
                      }
                    >
                      Daily
                    </button>
                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Weekly",
                          sub_payment: weeklyPayment,
                        })
                      }
                    >
                      Weekly
                    </button>
                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Monthly",
                          sub_payment: monthlyPayment,
                        })
                      }
                    >
                      Monthly
                    </button>
                  </aside>
                )}
              </label>
            </article>
          </main>

          <hr style={{ marginTop: 30 }} />
        </section>

        <section className={styles.sec_03}>
          <h3>Loan Estimation</h3>
          <article>
            <div>
              <p>Loan Amount</p>
              <span>₦{price.toLocaleString()}</span>
            </div>
            <div>
              <p>Loan Term</p>
              <span>{loanInfo.paymentTerm || "N/A"}</span>
            </div>
            <div>
              <p>Interest + Fees</p>
              <strong>
                ₦
                {loanInfo.interest
                  ? loanInfo.interest.toLocaleString()
                  : "0.00"}
              </strong>
            </div>
            <div>
              <p>{loanInfo.paymentPlan} Payment</p>
              <strong>
                ₦
                {loanInfo.sub_payment
                  ? loanInfo.sub_payment.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : "0.00"}
              </strong>
            </div>
            <div>
              <p>Total Payment</p>
              <strong>
                ₦
                {loanInfo.totalToPay
                  ? loanInfo.totalToPay.toLocaleString()
                  : "0.00"}
              </strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_04}>
          <Button children={"Next"} onClick={handleSaveToLocalStorage} />
        </section>
      </div>
    </div>
  );
}

export default GetQuote;
