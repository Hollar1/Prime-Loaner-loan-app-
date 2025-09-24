import styles from "../login/login.module.scss";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import { ImManWoman } from "react-icons/im";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
import back_icon from "../../assets/icons/back_icon.png";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={styles.parent_wrapper}>
      <NavBar goBack={back_icon} pageHeader={"Login  Page"} />
      <div className={styles.wrapper}>
        <section className={styles.sec_01}>
          <header>
            <h3>Login To Your Account</h3>
          </header>
          <form action="">
            <div>
              <Input label_text={"Email"} />
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
              <button onClick={() => navigate("/forgot-pass-email")}>
                Forgot Password ?
              </button>
            </div>

            <div onClick={() => navigate("/profile")}>
              <Button children={"Login"} />
            </div>
          </form>
        </section>

        <section className={styles.sec_02}>
          <p>Don't have an account?</p>
          <button onClick={() => navigate("/sign-up")}>Sign-Up</button>
        </section>
      </div>
    </div>
  );
}

export default Login;
