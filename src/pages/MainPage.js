import React from "react";

import { Background } from "../components/Background";
import { ContentSection } from "../components/ContentSection";
import { SocialLink } from "../components/SocialLink";

import portfolioData from "../content/portfolio.json";

import "./MainPageStyle.css";

const baseClass = "custom-main-page";

export function MainPage() {
  return (
    <div className={`${baseClass}-root`}>
      <Background />
      <div className={`${baseClass}-grid pure-g`}>
        <div
          className={`${baseClass}-center pure-u-1 pure-u-md-2-3 pure-u-lg-1-2 pure-u-xxl-1-3`}
        >
          <div className={`${baseClass}-center-inner`}>
            <div className={`${baseClass}-spacer`} />
            <div className={`${baseClass}-top`}>
              <h1>{portfolioData.title}</h1>
              <ul className={`${baseClass}-social-links`}>
                {(portfolioData.socialLinks ?? []).map((socialLink, i) => {
                  return <SocialLink key={i} {...socialLink} />;
                })}
              </ul>
            </div>
            {portfolioData.sections.map((section, i) => {
              return (
                <ContentSection
                  key={`content-section-${i}`}
                  section={section}
                />
              );
            })}
            <div className={`${baseClass}-center-spacer`} />
          </div>
        </div>
      </div>
    </div>
  );
}
