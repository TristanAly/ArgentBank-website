import React from "react";

const MoneyBankCard = (props) => {
  return (
    <div className="account">
      <div className="account-content-wrapper">
        <p className="account-title">Argent Bank {props.title}</p>
        <h2 className="account-amount">${props.money}</h2>
        <p className="account-amount-description">{props.balance} Balance</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </div>
  );
};

export default MoneyBankCard;
