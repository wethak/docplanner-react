import React from "react";
import "./App.css";
export default function Stats(props) {
  return (<div className="stats">
  <div className="stats-header">

      <h2>The world's biggest healthcare platform</h2>
       <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img src="https://www.docplanner.com/img/logo.png"/>

  </div>

    <div className="stats-grid-elements" >
      {props.grid.map(el => (
        <div className="stat-grid-col">
          <img className="stat-grid-element" src={el.logo} />
          <h3>{el.titre}</h3>
          <p>{el.soustitre}</p>
        </div>
      ))}
    </div>
    </div>
  );
  
}
