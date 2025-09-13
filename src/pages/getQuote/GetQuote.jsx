import styles from "../getQuote/getQuote.module.scss";
import NavBar from "../../components/navBar/NavBar";
import bike_01 from "../../assets/images/bikes/bike_01.png";
import rickshaw_01 from "../../assets/images/rickshaw/rickshaw_01.png";
import business_01 from "../../assets/images/business/business_01.png";
import car_01 from "../../assets/images/cars/car_01.png";
import { FaRegCircle, FaRegCircleCheck } from "react-icons/fa6";
import { HiArrowUturnLeft } from "react-icons/hi2";
import back_icon from "../../assets/icons/back_icon.png";
import Button from "../../components/button/Button";

function GetQuote() {
  return (
    <div className={styles.parent_wrapper}>
      <NavBar
        logo={""}
        pageHeader={"Select Loan Type"}
        goBack={back_icon}
      />
      <div className={styles.wrapper}>
        <header>
          <h3>Choose Your Loan</h3>
        </header>

        <section className={styles.sec_01}>
          <article>
            <img src={business_01} alt="" />
            <div>
              <strong>Business Loan</strong>
              <p>Interest 35%</p>
              <p>Price: ₦1,300,000</p>
            </div>
            {/* <FaRegCircleCheck className={styles.input} /> */}
            <FaRegCircle className={styles.input} />
          </article>

          <article>
            <img src={car_01} alt="" />
            <div>
              <strong>Business Loan</strong>
              <p>Interest 35%</p>
              <p>Price: ₦1,300,000</p>
            </div>
            {/* <FaRegCircleCheck className={styles.input} /> */}
            <FaRegCircle className={styles.input} />
          </article>

          <article>
            <img src={rickshaw_01} alt="" />
            <div>
              <strong>Business Loan</strong>
              <p>Interest 35%</p>
              <p>Price: ₦1,300,000</p>
            </div>
            {/* <FaRegCircleCheck className={styles.input} /> */}
            <FaRegCircle className={styles.input} />
          </article>

          <article>
            <img src={bike_01} alt="" />
            <div>
              <strong>Business Loan</strong>
              <p>Interest 35%</p>
              <p>Price: ₦1,300,000</p>
            </div>
            {/* <FaRegCircleCheck className={styles.input} /> */}
            <FaRegCircle className={styles.input} />
          </article>
        </section>

        <section className={styles.sec_02}>
          <h3>Estimate Your Loan</h3>
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
              <p>Interest</p>
              <span>₦455,000.00</span>
            </div>
            <hr />
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
          <Button children={"Next"} />
        </section>
      </div>
    </div>
  );
}

export default GetQuote;
