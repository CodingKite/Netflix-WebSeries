import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Sdata from "./Sdata.jsx";
import "./index.css";

ReactDOM.render(
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
    {Sdata.map((value) => {
      return (
        <Card
          key={value.id}
          sname={value.sname}
          imgsrc={value.imgsrc}
          title={value.title}
          link={value.links}
        />
      );
    })}
  </>,
  document.getElementById("root1")
);
