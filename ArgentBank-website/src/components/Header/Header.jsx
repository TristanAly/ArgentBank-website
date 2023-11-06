import React from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
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
  );
};

export default Header;
