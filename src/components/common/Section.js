import React from "react";

const Section = ({ addStyle, children }) => {
  return (
    <section className={`fixed-container py-4 ${addStyle ? addStyle : null}`}>
      {children}
    </section>
  );
};

export default Section;
