import React from "react";

const SocialButton = ({ link, icon }) => {
  return (
    <a target="_blank" href={link} className="social_icon">
      <i className={icon}></i>
    </a>
  );
};

export default SocialButton;
