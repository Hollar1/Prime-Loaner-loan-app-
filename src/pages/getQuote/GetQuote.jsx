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

  // const [loanInterest, setLoanInterest] = useState("");

  const [showPaymentTerm, setShowPaymentTerm] = useState(false);
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);

  const handleShowPaymentTerm = () => {
    setShowPaymentPlan(false);
    setShowPaymentTerm(!showPaymentTerm);
  };
  const handleShowPaymentPlan = () => {
    setShowPaymentTerm(false);
    setShowPaymentPlan(!showPaymentPlan);
  };

  const [loanInfo, setLoanInfo] = useState({
    chosenProduct: selected_product ? selected_product : "",
    paymentTerm: "",
    paymentPlan: "",
    sub_payment: "",
    interest: "",
    totalToPay: "",
  });

  useEffect(() => {
    if (loanInfo.paymentPlan) {
      setShowPaymentPlan(false);
    }
  }, [loanInfo.paymentPlan]);

  useEffect(() => {
    if (loanInfo.paymentTerm || loanInfo.interest) {
      setShowPaymentTerm(false);
    }
  }, [loanInfo.paymentTerm, loanInfo.interest]);

  // function to clear localStorage started here
  const handleSaveToLocalStorage = () => {
    if (
      !loanInfo.chosenProduct ||
      !loanInfo.paymentTerm ||
      !loanInfo.paymentPlan ||
      !loanInfo.sub_payment ||
      !loanInfo.interest
    ) {
      alert("all fields required!");
    } else {
      localStorage.setItem("loanInfo", JSON.stringify(loanInfo));
      navigate("/loan-form");
    }
  };
  // function to clear localStorage ends here

  const price = 500000; // If for i.e Market price is

  let interestAmount = (35 * price) / 100; // if for i.e we are taking interest of 35%

  const TotalInterest = {
    _06months: interestAmount,
    _09months: 50000 * 3 + interestAmount,
    _12months: 50000 * 6 + interestAmount,
    _15months: 50000 * 9 + interestAmount,
    _18months: 50000 * 12 + interestAmount,
    _21months: 50000 * 15 + interestAmount,
    _24months: 50000 * 18 + interestAmount,
  };

  const TotalLoan = {
    _06months: price + interestAmount,
    _09months: 50000 * 3 + interestAmount + price,
    _12months: 50000 * 6 + interestAmount + price,
    _15months: 50000 * 9 + interestAmount + price,
    _18months: 50000 * 12 + interestAmount + price,
    _21months: 50000 * 15 + interestAmount + price,
    _24months: 50000 * 18 + interestAmount + price,
  };

  const dailyPayment = loanInfo.totalToPay / 30;
  const monthlyPayment = loanInfo.totalToPay / 6;
  const weeklyPayment = monthlyPayment / 4;

  return (
    <div className={styles.parent_wrapper}>
      <NavBar logo={""} pageHeader={"Select Loan Type"} goBack={back_icon} />
      <div className={styles.wrapper}>
        <header>
          <h3>Choose Your Loan</h3>
        </header>

        {selected_product ? (
          <section className={styles.sec_01}>
            {selected_product === "car_loan" && (
              <article>
                <img src={car_01} alt="" />
                <div>
                  <strong>Car Loan</strong>
                  <p>Price: ₦1,300,000</p>
                </div>

                {selected_product === "car_loan" ? (
                  <FaRegCheckCircle className={styles.input} />
                ) : (
                  <FaRegCircle className={styles.input} />
                )}
              </article>
            )}

            {selected_product === "rickshaw_loan" && (
              <article>
                <img src={rickshaw_01} alt="" />
                <div>
                  <strong>Rickshaw Loan</strong>
                  <p>Price: ₦1,300,000</p>
                </div>
                {selected_product === "rickshaw_loan" ? (
                  <FaRegCheckCircle className={styles.input} />
                ) : (
                  <FaRegCircle className={styles.input} />
                )}
              </article>
            )}

            {selected_product === "motorbike_loan" && (
              <article>
                <img src={bike_01} alt="" />
                <div>
                  <strong>Motor-Bike Loan</strong>
                  <p>Price: ₦1,300,000</p>
                </div>
                {selected_product === "motorbike_loan" ? (
                  <FaRegCheckCircle className={styles.input} />
                ) : (
                  <FaRegCircle className={styles.input} />
                )}
              </article>
            )}
          </section>
        ) : (
          <section className={styles.sec_01}>
            <article
              onClick={() =>
                setLoanInfo({
                  ...loanInfo,
                  chosenProduct: "car_loan",
                })
              }
            >
              <img src={car_01} alt="" />
              <div>
                <strong>Car Loan</strong>

                <p>Price: ₦1,300,000</p>
              </div>

              {loanInfo.chosenProduct === "car_loan" ? (
                <FaRegCheckCircle className={styles.input} />
              ) : (
                <FaRegCircle className={styles.input} />
              )}
            </article>

            <article
              onClick={() =>
                setLoanInfo({
                  ...loanInfo,
                  chosenProduct: "rickshaw",
                })
              }
            >
              <img src={rickshaw_01} alt="" />
              <div>
                <strong>Rickshaw Loan</strong>
                <p>Price: ₦1,300,000</p>
              </div>

              {loanInfo.chosenProduct === "rickshaw" ? (
                <FaRegCheckCircle className={styles.input} />
              ) : (
                <FaRegCircle className={styles.input} />
              )}
            </article>

            <article
              onClick={() =>
                setLoanInfo({
                  ...loanInfo,
                  chosenProduct: "motor_bike",
                })
              }
            >
              <img src={bike_01} alt="" />
              <div>
                <strong>Motor-Bike Loan</strong>
                <p>Price: ₦1,300,000</p>
              </div>
              {loanInfo.chosenProduct === "motor_bike" ? (
                <FaRegCheckCircle className={styles.input} />
              ) : (
                <FaRegCircle className={styles.input} />
              )}
            </article>
          </section>
        )}

        <hr />
        <section className={styles.sec_02}>
          <h3> Schedule Payment</h3>

          <main>
            <article>
              <span>Payment Term</span>
              <label htmlFor="">
                <div onClick={handleShowPaymentTerm}>
                  {loanInfo.paymentTerm ? loanInfo.paymentTerm : "--Select--"}{" "}
                  <FaChevronDown />
                </div>
                {showPaymentTerm && (
                  <aside>
                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._06months,
                          paymentTerm: "6 months",
                          totalToPay: TotalLoan._06months,
                        })
                      }
                    >
                      6 Months
                    </button>

                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._09months,
                          paymentTerm: "9 months",
                          totalToPay: TotalLoan._09months,
                        })
                      }
                    >
                      9 Months
                    </button>
                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._12months,
                          paymentTerm: "12 months",
                          totalToPay: TotalLoan._12months,
                        })
                      }
                    >
                      12 Months
                    </button>

                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._15months,
                          paymentTerm: "15 months",
                          totalToPay: TotalLoan._15months,
                        })
                      }
                    >
                      15 Months
                    </button>

                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._18months,
                          paymentTerm: "18 months",
                          totalToPay: TotalLoan._18months,
                        })
                      }
                    >
                      18 Months
                    </button>

                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._21months,
                          paymentTerm: "21 months",
                          totalToPay: TotalLoan._21months,
                        })
                      }
                    >
                      21 Months
                    </button>

                    <button
                      onClick={() =>
                        setLoanInfo({
                          ...loanInfo,
                          interest: TotalInterest._24months,
                          paymentTerm: "24 months",
                          totalToPay: TotalLoan._24months,
                        })
                      }
                    >
                      24 Months
                    </button>
                  </aside>
                )}
              </label>
            </article>

            <article>
              <span>Payment Plan</span>
              <label htmlFor="">
                <div onClick={handleShowPaymentPlan}>
                  {loanInfo.paymentPlan ? loanInfo.paymentPlan : "--Select--"}{" "}
                  <FaChevronDown />
                </div>
                {showPaymentPlan && (
                  <aside>
                    <button
                      onClick={() => {
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Daily",
                          sub_payment: dailyPayment,
                        });
                      }}
                    >
                      Daily
                    </button>
                    <button
                      onClick={() => {
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Weekly",
                          sub_payment: weeklyPayment,
                        });
                      }}
                    >
                      Weekly
                    </button>
                    <button
                      onClick={() => {
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Monthly",
                          sub_payment: monthlyPayment,
                        });
                      }}
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
              <span>{loanInfo.paymentTerm ? loanInfo.paymentTerm : "N/A"}</span>
            </div>
            <div>
              <p>Interest %</p>
              <strong>₦{loanInfo.interest ? loanInfo.interest : "0.00"}</strong>
            </div>{" "}
            <div>
              <p>{loanInfo.paymentPlan} Payment</p>
              <strong>
                ₦
                {loanInfo.sub_payment
                  ? loanInfo.sub_payment.toLocaleString()
                  : "0.00"}
              </strong>
            </div>{" "}
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
