import React from "react";
import "./Header.css";

var today = new Date();
var month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var date = today.getDate() + " " + month[today.getMonth()];

const HeaderTitle = () => {
  return (
    <div className="title-bar">
      <span className="user">Lambda School</span>
      <span className="handle"> @LambdaSchool • {date}</span>
    </div>
  );
};

export default HeaderTitle;
