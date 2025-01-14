import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import MoneyBankCard from "../../components/MoneyBankCard/MoneyBankCard";
import { getUser, updateUser } from "../../actions/postUser.action";

const User = () => {
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
    }
  }, [dispatch, token]);

  // Fonction pour afficher le formulaire d'édition
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };
  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserName = e.target.elements.userName.value;
    let userDetails = {
      userName: newUserName,
    };
    dispatch(updateUser(userDetails))
      .then((result) => {
        if (result.payload) {
          console.log("Mise à jour réussie :", result.payload);
          return dispatch(getUser(token));
        } else {
          console.log("Mise à jour échouée :", result.error); // Ajoutez cette ligne pour voir l'erreur en cas d'échec
        }
      })
      .then(() => {
        console.log("Données de l'utilisateur après mise à jour :", user); // Ajoutez cette ligne pour voir les données de l'utilisateur après mise à jour
        setIsEditing(false);
      });
  };

  return user ? (
    <div>
      <Header name={user.userName} />
      <div className="main-bank bg-dark">
        <div className="header">
          <h2>
            Welcome back <br /> {user.firstName} {user.lastName}!
          </h2>
          <button className="edit-button" onClick={handleEditClick}>
            Edit Name
          </button>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="edit-form">
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue={user.firstName}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue={user.lastName}
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="userName">Username</label>
                  <input
                    type="text"
                    id="userName"
                    defaultValue={user.userName}
                  />
                </div>
              </div>
              <button className="edit-button" type="submit">
                Save
              </button>
            </form>
          ) : null}
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
