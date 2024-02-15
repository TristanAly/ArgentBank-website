import React from "react";
import FeatureItem from "../FeatureItem/FeatureItem";

const Feature = (props) => {
  return (
    <div className="features">
      <FeatureItem
        icon={"/img/icon-chat.webp"}
        alt={"icone de chat"}
        title={"You are our #1 priority"}
        paragraphe={
          "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        }
      />
      <FeatureItem
        icon={"/img/icon-money.webp"}
        alt={"icone représentant de l'argent"}
        title={"More savings means higher rates"}
        paragraphe={
          "The more you save with us, the higher your interest rate will be!"
        }
      />
      <FeatureItem
        icon={"./img/icon-security.webp"}
        alt={"icone de bouclier"}
        title={"Security you can trust"}
        paragraphe={
          "We use top of the line encryption to make sure your data and money is always safe."
        }
      />
    </div>
  );
};

export default Feature;
