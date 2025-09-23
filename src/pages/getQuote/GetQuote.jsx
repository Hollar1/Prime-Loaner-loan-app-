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

  const allLoans = [
    {
      product: "car_loan",
      price: 6000000,
      interest_percentage: 55,
    },
    {
      product: "rickshaw_loan",
      price: 3600000,
      interest_percentage: 45,
    },
    {
      product: "motorbike_loan",
      price: 1300000,
      interest_percentage: 35,
    },
  ];

  const [showPaymentTerm, setShowPaymentTerm] = useState(false);
  const [showPaymentPlan, setShowPaymentPlan] = useState(false);

  const [loanInfo, setLoanInfo] = useState({
    chosenProduct: selected_product || "",
    paymentTerm: "",
    paymentPlan: "",
    loan_price: "",
    sub_payment: "",
    interest: "",
    totalToPay: "",
  });

  useEffect(() => {
    if (selected_product) {
      const foundLoan = allLoans.find(
        (loan) => loan.product === selected_product
      );
      if (foundLoan) {
        setLoanInfo((prev) => ({
          ...prev,
          chosenProduct: foundLoan.product,
          loan_price: foundLoan.price,
        }));
      }
    }
  }, [selected_product]);

  const handleShowPaymentTerm = (e) => {
    e.stopPropagation();
    setShowPaymentPlan(false);
    setTimeout(() => {
      setShowPaymentTerm((prev) => !prev);
    }, 0);
  };

  const handleShowPaymentPlan = (e) => {
    e.stopPropagation();
    setShowPaymentTerm(false);
    setTimeout(() => {
      setShowPaymentPlan(!showPaymentPlan);
    }, 0);
  };

  const handleSaveToLocalStorage = () => {
    const {
      chosenProduct,
      paymentTerm,
      paymentPlan,
      sub_payment,
      interest,
      loan_price,
    } = loanInfo;

    if (
      !chosenProduct ||
      !paymentTerm ||
      !paymentPlan ||
      !sub_payment ||
      !interest ||
      !loan_price
    ) {
      alert("All fields are required and must be completed before proceeding.");
    } else {
      localStorage.setItem("loanInfo", JSON.stringify(loanInfo));
      navigate("/loan-form");
    }
  };

  const getInterestPercentage = (productKey) => {
    const match = allLoans.find((loan) => loan.product === productKey);
    return match?.interest_percentage || 0;
  };

  const getLoanCalculations = (termMonths, price, interestPercentage) => {
    const baseInterest = (interestPercentage / 100) * price;
    let extraCharges = 0;

    if (termMonths > 6) {
      const extraMonths = termMonths - 6;
      extraCharges = extraMonths * 50000;
    }

    const totalInterest = baseInterest + extraCharges;
    const totalLoan = price + totalInterest;

    return {
      interest: totalInterest,
      totalToPay: totalLoan,
      monthlyPayment: totalLoan / termMonths,
      weeklyPayment: totalLoan / (termMonths * 4),
      dailyPayment: totalLoan / (termMonths * 30),
    };
  };

  const price = loanInfo.loan_price || 0;
  const interestPercentage = getInterestPercentage(loanInfo.chosenProduct);
  const termMonths = parseInt(loanInfo.paymentTerm?.split(" ")[0]) || 0;

  const { dailyPayment, weeklyPayment, monthlyPayment } =
    termMonths && price
      ? getLoanCalculations(termMonths, price, interestPercentage)
      : {};

  return (
    <div className={styles.parent_wrapper}>
      <NavBar logo={""} pageHeader={"Select Loan Type"} goBack={back_icon} />

      <div className={styles.wrapper}>
        <header>
          <h3>Choose Your Loan</h3>
        </header>

        <section className={styles.sec_01}>
          {allLoans.map((loan) => {
            const productImage =
              loan.product === "car_loan"
                ? car_01
                : loan.product === "rickshaw_loan"
                ? rickshaw_01
                : bike_01;

            const displayName =
              loan.product === "car_loan"
                ? "Car Loan"
                : loan.product === "rickshaw_loan"
                ? "Rickshaw Loan"
                : "Motor-Bike Loan";

            return (
              <article
                key={loan.product}
                onClick={() => {
                  setLoanInfo({
                    ...loanInfo,
                    chosenProduct: loan.product,
                    loan_price: loan.price,
                    paymentPlan: "",
                    paymentTerm: "",
                    sub_payment: "",
                    totalToPay: "",
                    interest: "",
                  });
                  setShowPaymentPlan(false);
                  setShowPaymentTerm(false);
                }}
              >
                <img src={productImage} alt={displayName} />
                <div>
                  <strong>{displayName}</strong>
                  <p>Price: ₦{loan.price.toLocaleString()}</p>
                </div>
                {loanInfo.chosenProduct === loan.product ? (
                  <FaRegCheckCircle className={styles.input} />
                ) : (
                  <FaRegCircle className={styles.input} />
                )}
              </article>
            );
          })}
        </section>

        <hr />

        <section className={styles.sec_02}>
          <h3>Schedule Payment</h3>

          <main>
            {/* Payment Term */}
            <article>
              <span>Payment Term</span>
              <label>
                <div onClick={(e) => handleShowPaymentTerm(e)}>
                  {loanInfo.paymentTerm || "--Select--"} <FaChevronDown />
                </div>
                {showPaymentTerm && (
                  <aside>
                    {[6, 9, 12, 15, 18, 21, 24].map((months) => {
                      const { interest, totalToPay } = getLoanCalculations(
                        months,
                        price,
                        interestPercentage
                      );

                      const updatedLoan = {
                        ...loanInfo,
                        interest,
                        totalToPay,
                        paymentTerm: `${months} months`,
                      };

                      if (loanInfo.paymentPlan === "Daily") {
                        updatedLoan.sub_payment = totalToPay / (months * 30);
                      } else if (loanInfo.paymentPlan === "Weekly") {
                        updatedLoan.sub_payment = totalToPay / (months * 4);
                      } else if (loanInfo.paymentPlan === "Monthly") {
                        updatedLoan.sub_payment = totalToPay / months;
                      }

                      return (
                        <button
                          key={months}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLoanInfo(updatedLoan);
                            setShowPaymentTerm(false);
                          }}
                        >
                          {months} Months
                        </button>
                      );
                    })}
                  </aside>
                )}
              </label>
            </article>

            {/* Payment Plan */}
            <article>
              <span>Payment Plan</span>
              <label>
                <div onClick={(e) => handleShowPaymentPlan(e)}>
                  {loanInfo.paymentPlan || "--Select--"} <FaChevronDown />
                </div>
                {showPaymentPlan && (
                  <aside>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Daily",
                          sub_payment: dailyPayment,
                        });
                        setShowPaymentPlan(false);
                      }}
                    >
                      Daily
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Weekly",
                          sub_payment: weeklyPayment,
                        });
                        setShowPaymentPlan(false);
                      }}
                    >
                      Weekly
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLoanInfo({
                          ...loanInfo,
                          paymentPlan: "Monthly",
                          sub_payment: monthlyPayment,
                        });
                        setShowPaymentPlan(false);
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
              <span>
                ₦
                {loanInfo.loan_price
                  ? loanInfo.loan_price.toLocaleString()
                  : "0.00"}
              </span>
            </div>
            <div>
              <p>Payment Term</p>
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
              <p>{loanInfo.paymentPlan || "Payment"} Payment</p>
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
