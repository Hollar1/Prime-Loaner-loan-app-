import { useState } from "react";
import styles from "../applicationDetails/applicationDetails.module.scss";
import SideBar from "../compo_nets/sideBar/SideBar";
import Sub_navBar from "../compo_nets/sub_navBar/Sub_navBar";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
function ApplicationDetails() {
  const [paymentInfo, setPaymentInfo] = useState({
    plate_number: "",
    tracker_number: "",
    payment_plan: "",
    amount: "",
  });

  const [savePayment, setSavePayment] = useState([]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddPayment = () => {
    setSavePayment([...savePayment, paymentInfo]);
  };

  console.log("This is all payment info", savePayment);

  return (
    <div className={styles.parent_wrapper}>
      <Sub_navBar />
      <SideBar />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <div>
            <h3>Application #loaner-001</h3>
            <span>Submitted on: 12-Jan-24</span>
          </div>

          <div>
            <button>
              {" "}
              <FaRegCheckCircle fontSize={17} />
              Approve
            </button>
            <button>
              <IoMdCloseCircleOutline fontSize={22} /> Decline
            </button>
          </div>
        </section>

        <section className={styles.sec_02}>
          <article>
            <main className={styles.main_01}>
              <h4>Personal Information</h4>
              <div>
                <aside>
                  <span>Full Name</span>
                  <p>Femi Adebayo</p>
                </aside>
                <aside>
                  <span>Date of Birth</span>
                  <p>17/04/1987</p>
                </aside>
                <aside>
                  <span>Phone Number</span>
                  <p>08033777351</p>
                </aside>
                <aside>
                  <span>Email Address</span>
                  <p>femiadebayo@gmail.comuygdssadkgas</p>
                </aside>
              </div>
            </main>

            <main className={styles.main_02}>
              <h4>Residential Address</h4>
              <div>
                <aside>
                  <span>House Num / Name</span>
                  <p>Femi Adebayo</p>
                </aside>
                <aside>
                  <span>Street</span>
                  <p>17/04/1987</p>
                </aside>
                <aside>
                  <span>Town/Village</span>
                  <p>08033777351</p>
                </aside>
                <aside>
                  <span>State</span>
                  <p>femiadebayo@gmail.com</p>
                </aside>

                <aside>
                  <span>LGA</span>
                  <p>Osin Local government Area</p>
                </aside>
                <aside>
                  <span>House Status</span>
                  <p>Rented</p>
                </aside>
              </div>
            </main>

            <main className={styles.main_03}>
              <h4>Financial & Loan Details</h4>
              <div>
                <aside>
                  <span>Occupation</span>
                  <p>Bike Man</p>
                </aside>
                <aside>
                  <span>Loan Type</span>
                  <p>Motor Bike</p>
                </aside>
                <aside>
                  <span>Payment Term</span>
                  <p>9 Months</p>
                </aside>
                <aside>
                  <span>Payment Plan</span>
                  <p>Monthly</p>
                </aside>
                <aside>
                  <span>Daily Income</span>
                  <p>₦15,000</p>
                </aside>
                <aside>
                  <span>Loan Amount</span>
                  <p>₦1,500,000</p>
                </aside>
              </div>
            </main>

            <main className={styles.main_04}>
              <h4>Documents</h4>
              <div>
                <p>
                  NIN <button>View</button>
                </p>
                <p>
                  Utility Bill <button>View</button>
                </p>
              </div>
            </main>
          </article>

          <article>
            <main>
              <h4>House description</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                modi tempore vel quaerat fuga nobis iusto eligendi velit est,
                debitis rerum eum? Doloribus molestias quod, aut molestiae porro
                ab sunt?
              </p>
            </main>

            <main>
              <h4>Add Plate Num & Tracker I'D</h4>
              <aside>
                <label htmlFor="">
                  Plate Num:
                  <input type="text" />
                </label>
                <label htmlFor="">
                  Tracker I'D:
                  <input type="text" />
                </label>
              </aside>
              <button onClick={() => handleAddPayment()}>Add</button>
            </main>

            <main>
              <h4>Schedule Payments</h4>
              <aside>
                <label htmlFor="">
                  Payment Num:
                  <select name="" id="">
                    <option value="">--Select--</option>
                    <option value="payment-01">Payment 01</option>
                    <option value="payment-02">Payment 02</option>
                    <option value="payment-03">Payment 03</option>
                    <option value="payment-04">Payment 04</option>
                    <option value="payment-05">Payment 05</option>
                    <option value="payment-06">Payment 06</option>
                    <option value="payment-07">Payment 07</option>
                    <option value="payment-08">Payment 08</option>
                    <option value="payment-09">Payment 09</option>
                    <option value="payment-10">Payment 10</option>
                    <option value="payment-11">Payment 11</option>
                    <option value="payment-12">Payment 12</option>
                    <option value="payment-13">Payment 13</option>
                    <option value="payment-14">Payment 14</option>
                    <option value="payment-15">Payment 15</option>
                    <option value="payment-16">Payment 16</option>
                    <option value="payment-17">Payment 17</option>
                    <option value="payment-18">Payment 18</option>
                    <option value="payment-19">Payment 19</option>
                    <option value="payment-20">Payment 20</option>
                    <option value="payment-21">Payment 21</option>
                    <option value="payment-22">Payment 22</option>
                    <option value="payment-23">Payment 23</option>
                    <option value="payment-24">Payment 24</option>
                  </select>
                </label>
                <label htmlFor="">
                  Payment Date:
                  <input
                    type="date"
                    value={paymentInfo.paymentDate}
                    name="paymentDate"
                    onChange={handleOnChange}
                  />
                </label>

                <label htmlFor="">
                  Amount:
                  <input
                    type="input"
                    value={paymentInfo.amount}
                    name="amount"
                    onChange={handleOnChange}
                  />
                </label>
              </aside>
              <button onClick={() => handleAddPayment()}>Create</button>
            </main>
          </article>
        </section>
      </div>
    </div>
  );
}

export default ApplicationDetails;
