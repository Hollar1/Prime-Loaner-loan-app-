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
            <label htmlFor="">
              Loan Type
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="car">Car</option>
                <option value="motor_bike">Motor Bike</option>
                <option value="rickshaw">Rickshaw</option>
              </select>
            </label>

            <label htmlFor="">
              Interest Rate %
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="car">25</option>
                <option value="motor_bike">30</option>
                <option value="rickshaw">35</option>
                <option value="rickshaw">40</option>
                <option value="rickshaw">45</option>
                <option value="rickshaw">50</option>
                <option value="rickshaw">55</option>
                <option value="rickshaw">60</option>
                <option value="rickshaw">65</option>
                <option value="rickshaw">70</option>
                <option value="rickshaw">75</option>
                <option value="rickshaw">80</option>
                <option value="rickshaw">85</option>
              </select>
            </label>

            <label htmlFor="">
              Loan Amount ₦
              <input type="text" placeholder="130000" />
            </label>

            <label htmlFor="">
              Upload Photos
              <input type="text" />
            </label>
          </article>
        </section>

        <section className={styles.sec_03}>
          <label htmlFor="">
            Loan Note
            <textarea name="" id=""></textarea>
          </label>
          <div>
            <label htmlFor="">
              Loan Status
              <select name="" id="">
                <option value="">--Select--</option>
                <option value="car">Available</option>
                <option value="motor_bike">Unavailable</option>
                <option value="rickshaw">Pending</option>
              </select>
            </label>

            <button className={styles.add_loan}>Add Loan</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Loans;
