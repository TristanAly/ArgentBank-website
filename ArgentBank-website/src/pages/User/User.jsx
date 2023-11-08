import React, { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import MoneyBankCard from "../../components/MoneyBankCard/MoneyBankCard";
import { getUser } from "../../actions/userProfile.action";

const User = () => {
  const user = useSelector((state) => state.getuser);

  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token"); // Récupérez le token depuis le localStorage
    if (token) {
      // Si le token est disponible, appelez l'action getUser pour obtenir les informations de l'utilisateur
      dispatch(getUser(token));
    }
  }, [dispatch]);
  return user ? (
    <div>
      <Header />
      <div className="main-bank bg-dark">
        <div className="header">
          <h2>
            Welcome back <br /> {user.firstName} {user.lastName}!
          </h2>
          <button className="edit-button">Edit Name</button>
        </div>
        <MoneyBankCard
          title={"Checking"}
          money={"2,082.79"}
          balance={"Available"}
        />
        <MoneyBankCard
          title={"Savings"}
          money={"2,082.79"}
          balance={"Available"}
        />
        <MoneyBankCard
          title={"Credit Card"}
          money={"2,082.79"}
          balance={"Available"}
        />
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <h1>page fonctionne pas</h1>
    </div>
  );
};

export default User;
