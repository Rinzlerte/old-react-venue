import React from "react";

const Description = ({ description, title, details }) => {
  return (
    <div className="center_wrapper description_wrapper">
      <h4>{description}</h4>
      <h2>{title}</h2>
      <br />
      <div className="highlight_description">{details}</div>
    </div>
  );
};

export default Description;
