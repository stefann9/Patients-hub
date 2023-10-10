import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../core/context/user-context";
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import "./Navigation.css";
import Logo from "../../assets/hospital-1066.svg";

const Navigation = () => {
  const [user] = useContext(UserContext);
  return (
    <nav className="navigation">
      <Link className="logo-container" to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <div className="nav-links-container">
        <Link to="/">
          <SlButton className="nav-link" variant="primary" outline>
            Dashboard
          </SlButton>
        </Link>

        {user ? (
          <Link to="/login">
            <SlButton className="nav-link signup-logout" variant="primary">
              Log out
            </SlButton>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <SlButton className="nav-link" variant="primary" outline>
                Log in
              </SlButton>
            </Link>
            <Link to="/signup">
              <SlButton className="nav-link signup-logout" variant="primary">
                Sign Up
              </SlButton>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
