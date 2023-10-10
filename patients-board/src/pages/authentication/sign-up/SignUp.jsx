import { useState, useEffect } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../authentication.css";

import { validateSignupUser } from "../../../utils/validationUtils";

import {
  SlOption,
  SlSelect,
  SlButton,
  SlInput,
  SlAlert,
  SlIcon,
} from "@shoelace-style/shoelace/dist/react";

import { UserService } from "../../../core/service/user-service";
import { SignUpService } from "../../../core/service/signup-service";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [speciality, setSpeciality] = useState("");

  const [alertVariant, setAlertVariant] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [functions, setFunctions] = useState([]);
  const navigate = useNavigate();

  const UserFields = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    speciality: speciality,
    role: role,
  };

  const notify = useRef(null);
  const getFunctions = async () => {
    try {
      const functions = await SignUpService.getFunctions();
      setFunctions(functions);
    } catch (e) {
      console.error(e);
    }
  };
  const getSpecialities = async () => {
    try {
      const specialities = await SignUpService.getSpecialities();
      setSpecialities(specialities);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getSpecialities();
    getFunctions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { variant, message } = validateSignupUser(UserFields);

    setAlertVariant(variant);
    setAlertMessage(message);

    if (variant === "success") {
      const RegisteredUser = {
        firstName: firstName,
        lastName: lastName,
        username: email,
        password: password,
        functionId: speciality,
        departmentId: role,
      };
      try {
        const response = await UserService.signup(RegisteredUser);
        if (response) {
          notify.current.toast();
          navigate("/login");
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
        <div className="big-auth authentication-page">
          <form className="form-container" onSubmit={handleSubmit}>
            <h3>Register now</h3>
            <SlInput
              className="form-element"
              id="first-name"
              label="First Name"
              type="text"
              value={firstName}
              onSlInput={(e) => setFirstName(e.target.value)}
              size="medium"
            />
            <SlInput
              className="form-element"
              id="last-name"
              label="Last Name"
              type="text"
              value={lastName}
              onSlInput={(e) => setLastName(e.target.value)}
              size="medium"
            />
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
            <SlInput
              className="form-element"
              id="confirm-password"
              label="Confirm password"
              value={confirmPassword}
              onSlInput={(e) => setConfirmPassword(e.target.value)}
              type="password"
              size="medium"
            />
            <SlSelect
              className="form-element select-element"
              label="Function"
              size="medium"
              onSlChange={(e) => setRole(e.target.value)}
            >
              {functions.map((func) => (
                <SlOption id={func.id} value={func.id}>
                  {func.title}
                </SlOption>
              ))}
            </SlSelect>
            <SlSelect
              className="form-element select-element"
              label="Speciality"
              size="medium"
              onSlChange={(e) => setSpeciality(e.target.value)}
            >
              {specialities.map((speciality) => (
                <SlOption id={speciality.id} value={speciality.id}>
                  {speciality.name}
                </SlOption>
              ))}
            </SlSelect>
            <SlButton
              className="auth-button form-element"
              variant="primary"
              type="submit"
              size="medium"
            >
              Sign up
            </SlButton>
            <p className="link-redirect">
              Already have an account? <Link to="/login">Login here.</Link>
            </p>
          </form>
        </div>
      </div>
      <div id="signup-alert">
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

export default SignUp;
