import NavBar from "../../components/navBar/NavBar";
import styles from "../home/home.module.scss";
import { HiOutlineBars4 } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import Whatsapp from "../../components/whatsapp/Whatsapp";
import { FaFacebook, FaYoutube, FaSquareInstagram } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import client_review from "../../utils/reviews";

import bike_01 from "../../assets/images/bikes/bike_01.png";
import bike_02 from "../../assets/images/bikes/bike_02.png";
import bike_03 from "../../assets/images/bikes/bike_03.png";
import bike_04 from "../../assets/images/bikes/bike_04.webp";

import rickshaw_01 from "../../assets/images/rickshaw/rickshaw_01.png";
import rickshaw_02 from "../../assets/images/rickshaw/rickshaw_02.png";
import rickshaw_03 from "../../assets/images/rickshaw/rickshaw_03.png";
import rickshaw_04 from "../../assets/images/rickshaw/rickshaw_04.png";

import business_01 from "../../assets/images/business/business_01.png";
import business_02 from "../../assets/images/business/business_01.png";
import business_03 from "../../assets/images/business/business_01.png";
import business_04 from "../../assets/images/business/business_01.png";

import car_01 from "../../assets/images/cars/car_01.png";
import car_02 from "../../assets/images/cars/car_02.png";
import car_03 from "../../assets/images/cars/car_03.png";
import car_04 from "../../assets/images/cars/car_04.png";
import { useNavigate } from "react-router-dom";


const business_photos = [business_01, business_02, business_03, business_04];

const car_photos = [car_01, car_02, car_03, car_04];

const rickshaw_photos = [rickshaw_01, rickshaw_02, rickshaw_03, rickshaw_04];

const bike_photos = [bike_01, bike_02, bike_03, bike_04];

function Home() {
  const navigate = useNavigate();

  const [showAnswer, setShowAnswer] = useState("");

  const [changeBackground, setChangeBackground] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setChangeBackground(!changeBackground);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [changeBackground]);

  const [carIndex, setCarIndex] = useState(0);
  const handle_car_next = () => {
    setCarIndex((prevValue) => {
      return prevValue === car_photos.length - 1 ? 0 : prevValue + 1;
    });
  };

  const handle_car_previous = () => {
    setCarIndex((prevValue) => {
      return prevValue === 0 ? car_photos.length - 1 : prevValue - 1;
    });
  };

  const [rickshawIndex, setRickshawIndex] = useState(0);
  const handle_rickshaw_next = () => {
    setRickshawIndex((prevValue) => {
      return prevValue === car_photos.length - 1 ? 0 : prevValue + 1;
    });
  };

  const handle_rickshaw_previous = () => {
    setRickshawIndex((prevValue) => {
      return prevValue === 0 ? car_photos.length - 1 : prevValue - 1;
    });
  };

  const [bikeIndex, setBikeIndex] = useState(0);
  const handle_bike_next = () => {
    setBikeIndex((prevValue) => {
      return prevValue === car_photos.length - 1 ? 0 : prevValue + 1;
    });
  };

  const handle_Bike_previous = () => {
    setCarIndex((prevValue) => {
      return prevValue === 0 ? car_photos.length - 1 : prevValue - 1;
    });
  };

  const navigateToLoan = (selected_product) => {
    navigate("/get-quote", {
      state: {
        product: selected_product,
      },
    });
  };

  // Review functions started from here
  const [reviewIndex, setReviewIndex] = useState(3);
  const review = client_review[reviewIndex];

  useEffect(() => {
    const timer = setTimeout(() => {
      setReviewIndex((prev) =>
        prev === client_review.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearTimeout(timer);
  }, [reviewIndex]);

  // Review functions ends from here

  return (
    <div className={styles.parent_wrapper}>
      <Whatsapp />
      <NavBar
        companyName={"Prime Loaner"}
        bars={<HiOutlineBars4 />}
        closeBars={<IoMdCloseCircle color="brown" size={25} />}
        user={<FaRegCircleUser />}
      />
      <div className={styles.wrapper}>
        <section
          className={changeBackground ? styles.sec_01_A : styles.sec_01_B}
        >
          <div>
            <h1>Empowering Your </h1>
            <h1>Business Dreams</h1>
            <h3>
              Get the financial support you need to grow your business. Quick
              approvals, flexible terms, and personalized service.
            </h3>
            <button onClick={() => navigate("/get-quote")}>Get Quote</button>
          </div>
        </section>

        <section className={styles.sec_00}>
          <h3>Welcome to Prime Loaner</h3>
          <p>
            We are here to support hardworking people like motorcycle riders,
            car drivers, and rickshaw operators. Our goal is to make it easy for
            you to get flexible loans you can repay in small installments,
            without the stress and delays of traditional banks.
          </p>
          <p>
            We see how hard you work, and we’re here to give you the financial
            support you need to grow, succeed, and build a better future.
          </p>
        </section>

        <main>
          <section className={styles.sec_02}>
            <h3>Loan Options We Offer</h3>

            <article>
              <img src={car_photos[carIndex]} alt="" />

              <div>
                <strong>Car Loans</strong>
                <p>
                  Specifically for drivers. Finance the purchase of a new car,
                  cover repairs, or handle document renewals with ease.
                </p>
              </div>

              <aside>
                <button>
                  <GrPrevious onClick={handle_car_previous} />
                </button>
                <button>
                  <GrNext onClick={handle_car_next} />
                </button>
              </aside>
              <button onClick={() => navigateToLoan("car_loan")}>
                Get Quote
              </button>
            </article>

            <article>
              <img src={rickshaw_photos[rickshawIndex]} alt="" />

              <div>
                <strong>Auto Rickshaw Loans</strong>
                <p>
                  Secure financing for a new auto rickshaw or to cover
                  maintenance costs. Keep your hustle moving forward.
                </p>
              </div>

              <aside>
                <button>
                  <GrPrevious onClick={handle_rickshaw_previous} />
                </button>
                <button>
                  <GrNext onClick={handle_rickshaw_next} />
                </button>
              </aside>
              <button onClick={() => navigateToLoan("rickshaw_loan")}>
                Get Quote
              </button>
            </article>

            <article>
              <img src={bike_photos[bikeIndex]} alt="" />

              <div>
                <strong>Motor Bike Loans</strong>

                <p>
                  For bike men and tricycle riders. Get funds to buy a new bike,
                  repair your current one, or renew your documents.
                </p>
              </div>
              <aside>
                <button>
                  <GrPrevious onClick={handle_Bike_previous} />
                </button>
                <button>
                  <GrNext onClick={handle_bike_next} />
                </button>
              </aside>
              <button onClick={() => navigateToLoan("motorbike_loan")}>
                Get Quote
              </button>
            </article>
          </section>

          <section className={styles.sec_03}>
            <h3>How It Works</h3>

            <div>
              <div>1</div>
              <h4>Apply Online</h4>
              <p>Complete our simple online application minutes.</p>
            </div>

            <div>
              <div>2</div>
              <h4>Apply Online</h4>
              <p>Our team will review your application for quick decision.</p>
            </div>

            <div>
              <div>3</div>
              <h4>Apply Online</h4>
              <p>
                Visit our office with your guarantor and collateral document.
              </p>
            </div>

            <div>
              <div>4</div>
              <h4>Apply Online</h4>
              <p>
                Once your loan application is approved, the funds will be
                disbursed to you..
              </p>
            </div>
          </section>

          <section className={styles.sec_04}>
            <h3>What You Need to Apply</h3>

            <div>
              <IoCheckmarkCircleOutline color="#f2a20d" fontSize={23} />{" "}
              <p>Government-issued ID (NIN)</p>
            </div>

            <div>
              <IoCheckmarkCircleOutline color="#f2a20d" fontSize={23} />{" "}
              <p>Proof of address (utility bill/bank statement)</p>
            </div>

            <div>
              <IoCheckmarkCircleOutline color="#f2a20d" fontSize={23} />{" "}
              <p>1 Guarantor (must have property worth 5 million Naira)</p>
            </div>

            <div>
              <IoCheckmarkCircleOutline color="#f2a20d" fontSize={23} />{" "}
              <p>1 Reference (must have property worth 2 million Naira)</p>
            </div>

            <div>
              <IoCheckmarkCircleOutline color="#f2a20d" fontSize={23} />{" "}
              <p>Non-refundable 10,000 Naira application fee</p>
            </div>
          </section>

          <section className={styles.sec_05}>
            <h3>Why Choose Us?</h3>

            <article>
              <IoMdTime color="#f2a20d" fontSize={23} />
              <div>
                <h4>Fast Approvals</h4>
                <p>Get decision quickly so you can focus on your business.</p>
              </div>
            </article>
            <article>
              <TbCurrencyNaira color="#f2a20d" fontSize={23} />
              <div>
                <h4>Competitive Rates</h4>
                <p>We offer affordable rates to help your finances.</p>
              </div>
            </article>
            <article>
              <LiaHandsHelpingSolid color="#f2a20d" fontSize={23} />
              <div>
                <h4>Personalized Service</h4>
                <p>Get decision quickly so you can focus on your business.</p>
              </div>
            </article>
          </section>

          <section className={styles.sec_06}>
            <h3>What Our Clients Say</h3>

            <div key={review.id}>
              <b>{review.name}</b>
              <p>{review.review}</p>
            </div>

            <aside>
              <button>View All Reviews</button>
            </aside>
          </section>

          <section className={styles.sec_07}>
            <h3>Frequently Asked Questions</h3>

            <article>
              <div>
                <p>How much can I borrow?</p>
                {showAnswer === "question_01" ? (
                  <IoMdClose
                    fontSize={22}
                    color="brown"
                    onClick={() => setShowAnswer("")}
                  />
                ) : (
                  <IoIosArrowDown
                    fontSize={22}
                    onClick={() => setShowAnswer("question_01")}
                  />
                )}
              </div>
              {showAnswer === "question_01" && (
                <span>
                  We do not provide cash loans. Instead, our loans come in the
                  form of vehicles such as cars, rickshaws, and motorcycles. The
                  value of what you receive depends on the type of vehicle you
                  choose and its current market price. Once you select the loan
                  type, we’ll assess your application and let you know what
                  you're eligible for.
                </span>
              )}
            </article>

            <article>
              <div>
                <p>What are the repayment terms?</p>
                {showAnswer === "question_02" ? (
                  <IoMdClose
                    fontSize={22}
                    color="brown"
                    onClick={() => setShowAnswer("")}
                  />
                ) : (
                  <IoIosArrowDown
                    fontSize={22}
                    onClick={() => setShowAnswer("question_02")}
                  />
                )}
              </div>
              {showAnswer === "question_02" && (
                <span>
                  Repayment terms range from 6 months to 2 years, depending on
                  the type of loan you receive and your preferred repayment
                  plan. You can choose to repay within any interval between 6
                  and 24 months, based on what works best for you.
                </span>
              )}
            </article>

            <article>
              <div>
                <p>How long does approval take?</p>
                {showAnswer === "question_03" ? (
                  <IoMdClose
                    fontSize={22}
                    color="brown"
                    onClick={() => setShowAnswer("")}
                  />
                ) : (
                  <IoIosArrowDown
                    fontSize={22}
                    onClick={() => setShowAnswer("question_03")}
                  />
                )}
              </div>
              {showAnswer === "question_03" && (
                <span>
                  Loan approval typically takes 24 to 48 hours after you submit
                  all required documents and complete the application process.
                  We work quickly to get you moving as soon as possible.
                </span>
              )}
            </article>
          </section>

          <section className={styles.sec_08}>
            <h3>About Us</h3>
            <p>
              <p>
                At Prime Loaner, we’re here to support motorcycle riders,
                rickshaw operators, and car drivers with easy, flexible loan
                options tailored to your needs. We understand the hard work you
                put in every day to earn a living and keep things moving. That’s
                why our goal is to remove the stress of traditional banking by
                giving you fast access to the financial help you deserve.
              </p>
            </p>
          </section>

          <section className={styles.sec_09} id="contactUs">
            <h3>Contact Us</h3>

            <div>
              <strong>Phone:</strong>
              <a href="tel:">+2347067276727</a>
            </div>

            <div>
              <strong>Email:</strong>
              <a href="mailto:">admin@primeloaner.ng</a>
            </div>

            <div>
              <address>
                <strong>Office: </strong>
                F/ab55 Iku Quarter's, Ikare-Akoko, Ondo State, Nigeria.
              </address>
            </div>
          </section>
        </main>

        <nav>
          <section className={styles.sec_10}>
            <button onClick={() => navigate("/privacy-policy")}>
              Privacy Policy
            </button>
            <button onClick={() => navigate("/terms-conditions")}>
              Terms Of Services
            </button>
          </section>

          <section className={styles.sec_11}>
            <FaFacebook />
            <FaSquareInstagram />
            <FaYoutube />
          </section>
          <section className={styles.sec_12}>
            <p>&copy; 2025 LoanApp. All right reserved.</p>
          </section>
        </nav>
      </div>
    </div>
  );
}

export default Home;
