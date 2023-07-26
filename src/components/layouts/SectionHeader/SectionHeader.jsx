import React from "react";
import "./module.scss";
const SectionHeading = ({ children, ...props }) => {
  return (
    <>
      <h1 {...props}>{children}</h1>
    </>
  );
};

export default SectionHeading;
