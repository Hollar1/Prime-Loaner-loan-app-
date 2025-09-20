import SideBar from "../compo_nets/sideBar/SideBar";
import Sub_navBar from "../compo_nets/sub_navBar/Sub_navBar";
import { FaCar } from "react-icons/fa";
import { MdElectricRickshaw } from "react-icons/md";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiBriefcase } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import styles from "../loans/loans.module.scss";
import { TbCurrencyNaira } from "react-icons/tb";

function Loans() {
  return (
    <div className={styles.parent_wrapper}>
      <Sub_navBar pageHeader={"Loan Management"} />
      <SideBar />

      <div className={styles.wrapper}>
        <header>
          <h3>Available Loans</h3>
        </header>
        <section className={styles.sec_01}>
          <article>
            <div>
              <aside>
                <nav>
                  <GiBriefcase />
                </nav>
                <strong>
                  Business Loan <p>Manage car loan</p>
                </strong>
              </aside>
            </div>

            <BsThreeDotsVertical fontSize={25} />
          </article>

          <article>
            <aside>
              <nav>
                <FaCar />
              </nav>
              <strong>
                Car Loan
                <p>Manage car loan</p>
              </strong>
            </aside>
            <BsThreeDotsVertical fontSize={25} />
          </article>

          <article>
            <aside>
              <nav>
                <MdElectricRickshaw />
              </nav>
              <strong>
                Rickshaw Loan <p>Manage car loan</p>
              </strong>
            </aside>
            <BsThreeDotsVertical fontSize={25} />
          </article>
          <article>
            <aside>
              <nav>
                <RiMotorbikeFill />
              </nav>
              <strong>
                Motor Bike Loan <p>Manage car loan</p>
              </strong>
            </aside>
            <BsThreeDotsVertical fontSize={25} />
          </article>
        </section>

        <section className={styles.sec_02}>
          <h3>Create New Loan</h3>

          <article>
            <div>
              <label htmlFor="">
                Loan Type
                <select name="" id="">
                  <option value="">--Select--</option>
                  <option value="car">Car</option>
                  <option value="motor_bike">Motor Bike</option>
                  <option value="rickshaw">Rickshaw</option>
                </select>
              </label>

              <label className={styles.loan_term_A}>
                <p className={styles.p}> Loan Term(Months)</p>
                <div className={styles.loan_term}>
                  <select name="" id="">
                    <option value="">--Select--</option>
                    <option value="car">6 Months</option>
                    <option value="car">8 Months</option>
                    <option value="car">10 Months</option>
                    <option value="car">12 Months</option>
                    <option value="car">14 Months</option>
                    <option value="car">16 Months</option>
                    <option value="car">18 Months</option>
                    <option value="car">20 Months</option>
                    <option value="car">22 Months</option>
                    <option value="car">24 Months</option>
                  </select>
                  <button>Add</button>
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="">
                Loan Amount ₦
                <input type="text" placeholder="130000" />
              </label>
              <label htmlFor="">
                Upload Photos
                <input type="text" />
              </label>
            </div>
            <div>
              {" "}
              <label htmlFor="">
                Loan Note
                <textarea name="" id=""></textarea>
              </label>
              <button className={styles.add_loan}>Add Loan</button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Loans;
