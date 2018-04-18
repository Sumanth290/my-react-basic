import React from "react";

const Header = (props) => (
  <div className="header">
    <div className="header__title">{props.title}</div>
    { props.subtitle && (
        <div className="header__subtitle">
          {props.subtitle}
          <img className="header__icon" src="\media\smiley.png" alt="Smiley face"/>
        </div>
    )}
    {props.desc && <p className="header__desc">{props.desc}</p>}
  </div>
);

Header.defaultProps = {
  title : "Dilemma !!"
};

export default Header;
