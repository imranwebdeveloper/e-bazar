import React from "react";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <main className="bg-slate-100">
      <Outlet />
    </main>
  );
};

export default User;
