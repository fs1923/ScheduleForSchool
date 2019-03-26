import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <h1>Socialed</h1>
      <div>{children}</div>
    </div>
  );
};

export default AppLayout;
