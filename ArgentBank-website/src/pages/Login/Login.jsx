import React from "react";
import Header from "../../components/Header/Header";
import SignIn from "../../components/Form/SignIn";
import Footer from "../../components/Footer/Footer";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
};

export default Login;
