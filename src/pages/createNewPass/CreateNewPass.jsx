import styles from "../createNewPass/createNewPass.module.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { ImManWoman } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import { useState } from "react";

function CreateNewPass() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Create Password"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>
            <h3>Create New Password</h3>
          </header>
          <form action="">
            <div>
              <Input label_text={"OTP"} />
            </div>

            <div>
              <p>New Password</p>
              <article>
                <input type={showPassword ? "text" : "password"} />
                {showPassword ? (
                  <FaRegEyeSlash
                    fontSize={25}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaRegEye
                    fontSize={25}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </article>
            </div>

            <div>
              <Button children={"Submit"} />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CreateNewPass;
