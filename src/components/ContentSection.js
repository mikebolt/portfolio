import React from "react";
import { ContentItem } from "./ContentItem";
import "./ContentSectionStyle.css";

const baseClass = "content-section";

export const ContentSection = ({ section }) => {
  return (
    <section className="content-section">
      <div className="content-section-title">
        <img
          className={`${baseClass}-ornament right-margin-1`}
          src="png/ornament.png"
        ></img>
        <h2 className={`${baseClass}-title-text`}>{section.title}</h2>
        <img
          className={`${baseClass}-ornament mirror-x left-margin-1`}
          src="png/ornament.png"
        ></img>
      </div>
      {section.items.map(item => {
        return <ContentItem key={item.title} {...item}></ContentItem>;
      })}
    </section>
  );
};
