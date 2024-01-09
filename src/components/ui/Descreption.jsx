import React from "react";
import "../../styles/ui/descreption.css";

function Descreption({ desc, date }) {
  return (
    <div className={`descreption`}>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
}

export default Descreption;
