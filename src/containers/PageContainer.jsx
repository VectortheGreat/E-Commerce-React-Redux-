import React from "react";

const PageContainer = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
