import React from "react";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div id="nav">
      <span>
        <img id="nav-bar-image"src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
      </span>
      <div className="nav-menu">
        <ul>
          {props.x.map(el => (
            <div>
              <li className="dropdown">{el.title}</li>
              <ul id="sub-element">
                {el.submenu
                  ? el.submenu.map(element => <li>{element}</li>)
                  : null}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}





