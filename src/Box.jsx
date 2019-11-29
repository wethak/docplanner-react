import React from "react";
import "./App.css";
export default function Box(props) {
  return (
    <div className="service-item">
      {props.z.map((el, i) => (
        <div className={el.class}>
          <p>{el.title}</p>
          <h2>{el.subtitle}</h2>
          <div >
            {el.button ? (
              <select className="select-style">
                {el.button.map(element => (
                  <option>{element}</option>
                ))}
              </select>
            ) : null}
          </div>
          <img className="service-doctor-image" src={el.image} />
        </div>
      ))}
    </div>
  );
}
