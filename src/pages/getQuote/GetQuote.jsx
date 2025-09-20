import styles from "../getQuote/getQuote.module.scss";
import NavBar from "../../components/navBar/NavBar";
import bike_01 from "../../assets/images/bikes/bike_01.png";
import rickshaw_01 from "../../assets/images/rickshaw/rickshaw_01.png";
import business_01 from "../../assets/images/business/business_01.png";
import car_01 from "../../assets/images/cars/car_01.png";
import { FaRegCircle } from "react-icons/fa6";
import back_icon from "../../assets/icons/back_icon.png";
import Button from "../../components/button/Button";
import { useLocation, useNavigate } from "react-router-dom";

function GetQuote() {
  const navigate = useNavigate();

  const location = useLocation();

  const selected_product = location?.state?.product;

  console.log(selected_product);

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
                  <p>Interest 35%</p>
                  <p>Price: ₦1,300,000</p>
                </div>

                <FaRegCircle className={styles.input} />
              </article>
            )}

            {selected_product === "rickshaw_loan" && (
              <article>
                <img src={rickshaw_01} alt="" />
                <div>
                  <strong>Rickshaw Loan</strong>
                  <p>Interest 35%</p>
                  <p>Price: ₦1,300,000</p>
                </div>

                <FaRegCircle className={styles.input} />
              </article>
            )}

            {selected_product === "motorbike_loan" && (
              <article>
                <img src={bike_01} alt="" />
                <div>
                  <strong>Motor-Bike Loan</strong>
                  <p>Interest 35%</p>
                  <p>Price: ₦1,300,000</p>
                </div>

                <FaRegCircle className={styles.input} />
              </article>
            )}
          </section>
        ) : (
          <section className={styles.sec_01}>
          
            <article>
              <img src={car_01} alt="" />
              <div>
                <strong>Car Loan</strong>
                <p>Interest 35%</p>
                <p>Price: ₦1,300,000</p>
              </div>

              <FaRegCircle className={styles.input} />
            </article>

            <article>
              <img src={rickshaw_01} alt="" />
              <div>
                <strong>Rickshaw Loan</strong>
                <p>Interest 35%</p>
                <p>Price: ₦1,300,000</p>
              </div>

              <FaRegCircle className={styles.input} />
            </article>

            <article>
              <img src={bike_01} alt="" />
              <div>
                <strong>Motor-Bike Loan</strong>
                <p>Interest 35%</p>
                <p>Price: ₦1,300,000</p>
              </div>

              <FaRegCircle className={styles.input} />
            </article>
          </section>
        )}

        <hr />
        <section className={styles.sec_02}>
          <h3> Schedule Payment</h3>

          <article>
            <label htmlFor="">
              Payment Term
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="">6 Months</option>
                <option value="">9 Months</option>
                <option value="">12 Months</option>
                <option value="">15 Months</option>
                <option value="">18 Months</option>
                <option value="">21 Months</option>
                <option value="">24 Months</option>
              </select>
            </label>

            <label htmlFor="">
              Payment Plan
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="">Daily</option>
                <option value="">Weekly</option>
                <option value="">Monthly</option>
              </select>
            </label>
          </article>
          <hr />
        </section>

        <section className={styles.sec_03}>
          <h3>Loan Estimation</h3>
          <article>
            <div>
              <p>Loan Amount</p>
              <span>₦1,300,000</span>
            </div>
            <div>
              <p>Loan Term</p>
              <span>6 Months</span>
            </div>
            <div>
              <p>Monthly Payment</p>
              <strong>₦75,000</strong>
            </div>{" "}
            <div>
              <p>Total Payment</p>
              <strong>₦1,755,000</strong>
            </div>
          </article>
        </section>

        <section className={styles.sec_03}>
          <Button children={"Next"} onClick={() => navigate("/loan-form")} />
        </section>
      </div>
    </div>
  );
}

export default GetQuote;
