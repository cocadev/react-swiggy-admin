import React from "react";

const ContentHeaderButtons = props => {
  const {className} = props;
   return (
      <div
         className={`content-header-btn${
            className === undefined ? "" : ` ${className}`
         }`}
      >
         {props.children}
      </div>
   );
};

export default ContentHeaderButtons;
