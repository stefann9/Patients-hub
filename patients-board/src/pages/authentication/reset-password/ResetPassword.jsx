import { Link } from "react-router-dom";
import { useState } from "react";

import "../authentication.css";

import { SlButton, SlInput } from "@shoelace-style/shoelace/dist/react";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <div className="stethoscope-image background">
        <div className="small-auth authentication-page">
          <form className="form-container">
            <SlInput
              className="form-element"
              id="new-password"
              label="New password"
              type="password"
              value={newPassword}
              onSlChange={(e) => setNewPassword(e.target.value)}
              size="medium"
            />
            <SlInput
              className="form-element"
              id="confirm-password"
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onSlChange={(e) => setConfirmPassword(e.target.value)}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
