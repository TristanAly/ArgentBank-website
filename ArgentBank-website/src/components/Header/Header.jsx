import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = (props) => {
  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };
  return !getToken ? (
    <header>
      <nav>
        <Link to="/">
          <h1>
            <img src="./img/argentBankLogo.webp" alt="Argent Bank Logo" />
          </h1>
        </Link>
        <Link to="/login" className="link">
          <div className="button-log">
            <FaRegUserCircle className="iconUserCircle" />
            Sign In
          </div>
        </Link>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <h1>
          <img src="./img/argentBankLogo.webp" alt="Argent Bank Logo" />
        </h1>
        <div className="SignOut">
          <div className="userPreference">
            <FaRegUserCircle className="iconUserCircle" />
            <p>{props.name}</p>
          </div>
          <div className="bt-signout" onClick={handleSignOut}>
            <p>Sign Out</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
