import React from "react";
import "./Header.css";

const HeaderTitle = () => {
  return (
    <div className="title-bar">
      <span className="user">Lambda School</span>
      <span className="handle"> @LambdaSchool • 26 Jan</span>
    </div>
  );
};

export default HeaderTitle;
