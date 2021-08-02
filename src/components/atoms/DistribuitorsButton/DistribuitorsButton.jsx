import React from "react";

const DistribuitorsButton = ({ link, icon, text }) => {
  return (
    <a className="btn_distros" href={link}>
      <i className={icon}></i>
      <span>{text}</span>
    </a>
  );
};

export default DistribuitorsButton;
