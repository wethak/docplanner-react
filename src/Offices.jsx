import React from "react";
import "./App.css";
import { EMLINK } from "constants";
export default function Offices(props) {
  return <div className="offices">
      {props.Office.map((el)=>
      <div className="office-inner">
       <img src={el.image}/>
       <div className="office-info">
       <h3><a href="#">{el.title}</a></h3>
       <button>{el.button}</button>
        </div>
      </div>)}
  </div>;
}
