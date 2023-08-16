import React, { useState } from "react";
import Logo from "../../assets/socialReport logo.png";
import "./header.css";
const Header = () => {
  const [customLogo, setCustomLogo] = useState(null);

  const [positionLogoTop, setPositionLogoTop] = useState("");
  const [positionLogoBottom, setPositionLogoBottom] = useState("");
  const [positionLogoLeft, setPositionLogoLeft] = useState("");
  const [positionLogoRight, setPositionLogoRight] = useState("");

  const [customWidth, setCustomWidth] = useState('');

  return (
    <div className="logo">
      {customLogo ? (
        <img
          style={{
            paddingTop: positionLogoTop ? positionLogoTop : "",
            paddingBottom: positionLogoBottom ? positionLogoBottom : "",
            paddingLeft: positionLogoLeft ? positionLogoLeft : "",
            paddingRight: positionLogoRight ? positionLogoRight : "",
            width: customWidth ? customWidth : '',
          }}
          className="logo-img"
          src={customLogo}
        />
      ) : (
        <img
          style={{
            paddingTop: positionLogoTop ? positionLogoTop : "",
            paddingBottom: positionLogoBottom ? positionLogoBottom : "",
            paddingLeft: positionLogoLeft ? positionLogoLeft : "",
            paddingRight: positionLogoRight ? positionLogoRight : "",
            width: customWidth ? customWidth : '',
          }}
          className="logo-img"
          src={Logo}
        />
      )}
    </div>
  );
};

export default Header;
