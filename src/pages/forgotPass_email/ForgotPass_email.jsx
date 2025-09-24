import styles from "../forgotPass_email/forgotPass_email.module.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import { useState } from "react";

function ForgotPass_email() {
  const navigate = useNavigate();

  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Forgot Password"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>
            <h3>Request OTP For Password Reset</h3>
          </header>
          <form action="">
            <div>
              <Input label_text={"Email"} />
            </div>

            <div>
              <Button
                children={"Request OTP"}
                onClick={() => navigate("/create-new-pass")}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ForgotPass_email;
