import React from "react";

const ProductSection = ({ addStyle, children }) => {
  return (
    <div className={`border-2 rounded bg-white p-2 ${addStyle}`}>
      {children}
    </div>
  );
};

export default ProductSection;
