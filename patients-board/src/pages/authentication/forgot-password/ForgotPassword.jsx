import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

import "../authentication.css";

import {
  SlButton,
  SlInput,
  SlAlert,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";

import { validateEmailUser } from "../../../utils/validationUtils";

import { UserService } from "../../../core/service/user-service";

const ForgotPassword = () => {
  const [resetEmail, setResetEmail] = useState("");

  const notify = useRef(null);

  const navigate = useNavigate();

  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const { variant, message } = validateEmailUser({ email: resetEmail });

    setAlertMessage(message);
    setAlertVariant(variant);

    notify.current.toast();

    if (variant === "success") {
      try {
        const response = UserService.resetPassword({ email: resetEmail });
        if (response) {
          notify.current.toast();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <div className="stethoscope-image background">
        <div className="small-auth authentication-page">
          <form className="form-container" onSubmit={handleSubmit}>
            <h3>Reset your password</h3>
            <SlInput
              className="form-element"
              id="email"
              label="Email"
              type="text"
              value={resetEmail}
              onSlChange={(e) => setResetEmail(e.target.value)}
              size="medium"
            />
            <SlButton
              className="auth-button form-element"
              variant="primary"
              type="submit"
              size="medium"
            >
              Reset password
            </SlButton>
            <div className="redirect-container">
              <p className="link-redirect">
                Don't have an account? <Link to="/signup">Sign up here.</Link>
              </p>
              <p className="link-redirect">
                Already have an account? <Link to="/login">Login here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div id="reset-email-alert">
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

export default ForgotPassword;
