import { useState, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../authentication.css";

import { validateLoginUser } from "../../../utils/validationUtils";

import { UserService } from "../../../core/service/user-service";

import {
  SlButton,
  SlInput,
  SlAlert,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";

import {
  initialUserValue,
  UserContext,
} from "../../../core/context/user-context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const notify = useRef(null);

  const navigate = useNavigate();
  const [, setUser] = useContext(UserContext);

  const User = {
    username: email,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { variant, message } = validateLoginUser(User);

    setAlertMessage(message);
    setAlertVariant(variant);

    if (variant === "success") {
      try {
        const isLoginSuccessful = await UserService.login(User);

        if (isLoginSuccessful) {
          const user = await UserService.getUser();
          if (user) {
            console.log("GET user resp", user);
            setUser(user);

            notify.current.toast();

            UserService.setIsUserLoggedIn(isLoginSuccessful);
            navigate("/");
          }
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      notify.current.toast();
    }
  };

  return (
    <>
      <div className="medic-image background">
        <div className="small-auth authentication-page">
          <form className="form-container" onSubmit={handleLogin}>
            <h3>Login to your account</h3>
            <SlInput
              className="form-element"
              id="email"
              label="Email"
              type="text"
              value={email}
              onSlInput={(e) => setEmail(e.target.value)}
              size="medium"
            />
            <SlInput
              className="form-element"
              id="password"
              label="Password"
              type="password"
              value={password}
              onSlInput={(e) => setPassword(e.target.value)}
              size="medium"
            />
            <SlButton
              className="auth-button form-element"
              variant="primary"
              type="submit"
              size="medium"
            >
              Login
            </SlButton>
            <div className="redirect-container">
              <p className="link-redirect">
                Don't have an account? <Link to="/signup">Sign up here.</Link>
              </p>
              <p className="link-redirect">
                Forgot your password?{" "}
                <Link to="/forgot-password">Reset here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div id="login-alert">
        <SlAlert ref={notify} closable variant={alertVariant} duration="3000">
          <SlIcon slot="icon" name="exclamation-triangle" />
          <strong>{alertMessage}</strong>
          <br />
          {alertVariant === "warning" ? "Please try again." : ""}
        </SlAlert>
      </div>
    </>
  );
};

export default Login;
