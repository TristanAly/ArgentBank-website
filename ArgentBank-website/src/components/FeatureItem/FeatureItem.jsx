import React from "react";

const FeatureItem = (props) => {
  return (
    <div className="feature-item">
      <img className="feature-icon" src={props.icon} alt={props.alt} />
      <h3 className="feature-item-title">{props.title}</h3>
      <p>{props.paragraphe}</p>
    </div>
  );
};

export default FeatureItem;
