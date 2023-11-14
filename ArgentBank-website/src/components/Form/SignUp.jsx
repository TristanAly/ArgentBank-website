import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../../actions/postUser.action";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");

  // Redux states
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterEvent = (e) => {
    e.preventDefault();
    let userDetails = {
      email,
      password,
      firstName,
      lastName,
      userName,
    };
    let userCredentials = {
      email,
      password,
    };
    dispatch(registerUser(userDetails)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
        setUserName("");
        //   navigate("/profile");
        // }
        dispatch(loginUser(userCredentials)).then((loginResult) => {
          if (loginResult.payload) {
            setEmail("");
            setPassword("");
            navigate("/profile");
          }
        });
      }
    });
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaRegUserCircle className="iconUserCircle" />
        <h2>Sign Up</h2>
        <form onSubmit={handleRegisterEvent}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="link-sign">
            <Link to="/login" className="sign-route">
              I already have an account, log in
            </Link>
          </div>
          <button type="submit" className="sign-in-button">
            {loading ? "Loading..." : "Sign Up"}
          </button>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </form>
      </section>
    </main>
  );
};

export default SignUp;
