import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-2xl font-bold text-orange-600">
        E-Bazar<small className="text-green-600">.com</small>
      </Link>
    </div>
  );
};

export default Logo;
