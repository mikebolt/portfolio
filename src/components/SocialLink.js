import React from "react";
import "./SocialLinkStyle.css";

const baseClass = "social-link";

export const SocialLink = ({ icon, label, url }) => {
  return (
    <a className={`${baseClass}-root`} href={url}>
      <div className={`${baseClass}-icon-container`}>
        <img className={`${baseClass}-icon`} src={icon}></img>
      </div>
      <div className={`${baseClass}-label-container`}>
        <span className={`${baseClass}-label`}>{label}</span>
      </div>
    </a>
  );
};
