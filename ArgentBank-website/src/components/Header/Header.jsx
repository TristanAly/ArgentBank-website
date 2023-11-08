import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = (props) => {
  const getToken = localStorage.getItem("token");
  if (!getToken) {
  }
  return !getToken ? (
    <header>
      <nav>
        <Link to="/">
          <h1>
            <img src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
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
        <Link to="/">
          <h1>
            <img src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
          </h1>
        </Link>
        <div className="SignOut">
          <div className="userPreference">
            <FaRegUserCircle className="iconUserCircle" />
            <p>{props.name}</p>
          </div>
          <Link to="/login" className="link">
            <div className="button-log">Sign Out</div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
