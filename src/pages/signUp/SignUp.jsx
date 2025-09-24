import styles from "../signUp/signUp.module.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { ImManWoman } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import { useState } from "react";

function SignUp() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showGenderSelect, setShowGenderSelect] = useState(false);

  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Sign Up Page"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>
            <h3>Create Your Account</h3>
          </header>
          <form action="">
            <div>
              <Input label_text={"Sure Name"} />
            </div>
            <div>
              <Input label_text={"First Name"} />
            </div>
            <div>
              <Input label_text={"Middle Name"} />
            </div>

            <div>
              <p>Gender</p>

              <article>
                {showGenderSelect && (
                  <aside>
                    <label htmlFor="">
                      Male
                      <input type="radio" />
                    </label>
                    <label htmlFor="">
                      Female
                      <input type="radio" />
                    </label>
                  </aside>
                )}

                <aside onClick={() => setShowGenderSelect(!showGenderSelect)}>
                  <ImManWoman fontSize={22} />
                </aside>
              </article>
            </div>

            <div>
              <p>Password</p>
              <article>
                <input type={showPassword ? "text" : "password"} />
                {showPassword ? (
                  <FaRegEye
                    fontSize={25}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <FaRegEyeSlash
                    fontSize={25}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )}
              </article>
            </div>

            <div>
              <Button children={"Sign Up"} />
            </div>
          </form>
        </section>
        <section className={styles.sec_02}>
          <p>Already have an account?</p>
          <button onClick={() => navigate("/login")}>Login</button>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
