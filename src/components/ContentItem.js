import React from "react";
import "./ContentItemStyle.css";

export const ContentItem = ({
  title,
  media,
  mediaAlt,
  description,
  url,
  linkAlt,
}) => {
  return (
    <div className="content-item">
      <div className="content-item-title-row">
        <h3 className="content-item-title">{title}</h3>
        {url ? (
          <a className="content-item-link" href={url} alt={linkAlt ?? ""}>
            <img
              className="content-item-link-icon"
              src="svg/link-solid.svg"
            ></img>
          </a>
        ) : null}
      </div>
      {media ? (
        <img
          className="content-item-media"
          src={media}
          alt={mediaAlt ?? ""}
        ></img>
      ) : null}
      <p className="content-item-description">{description}</p>
    </div>
  );
};
