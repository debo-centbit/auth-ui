import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../header/header.component";
import InputForm from "../input-form/input-form.component";
import Buttons from "../button/button.component";
import Footer from "../footer/footer.component";
import LoginPromotionImage from "../../assets/login-promotion logo.png";
import "./login.css";

const Login = () => {
  const [label, setLabel] = useState("");
  const [promotionImage, setPromotionImage] = useState("");
  const [promotionImageSize, setPromotionImageSize] = useState("");
  const [promotionImagePositionLeft, setPromotionImagePositionLeft] =
    useState("");
  const [promotionImagePositionRight, setPromotionImagePositionRight] =
    useState("");
  const [promotionImagePositionTop, setPromotionImagePositionTop] =
    useState("");
  const [promotionImagePositionBottom, setPromotionImagePositionBottom] =
    useState("");

  const [positionOfFormTop, setPositionOfFormTop] = useState("");
  const [positionOfFormBottom, setPositionOfFormBottom] = useState("");
  const [positionOfFormLeft, setPositionOfFormLeft] = useState("");
  const [positionOfFormRight, setPositionOfFormRight] = useState("");

  const [inputBorderRadius, setInputBorderRadius] = useState("");

  return (
    <div className="main-container">
      <div className="login-details">
        <div>
          <Header />
        </div>
        <div className="sign-in-container">
          <div className="sign-in-title">
            <h1>Sign in</h1>
          </div>
          <div
            className="input-form"
            style={{
              paddingTop: positionOfFormTop ? positionOfFormTop : "",
              paddingBottom: positionOfFormBottom ? positionOfFormBottom : "",
              paddingLeft: positionOfFormLeft ? positionOfFormLeft : "",
              paddingRight: positionOfFormRight ? positionOfFormRight : "",
            }}
          >
            <InputForm label={label ? label : "Email Address *"} width="53ch" borderRadius={inputBorderRadius} />
            <InputForm label="Password *" width="53ch" />
          </div>
          <div className="login-forget-password-container">
            <Buttons label="LOGIN" width="25%" height="40px" color="blue" arrow/>
            <Link className="forgot-password-link" to="">
              Forgot your password?
            </Link>
          </div>
         {/* <div className="new"> */}
          <div className="new-acc-button">
            <Buttons
              label="CREATE NEW ACCOUNT"
              width="100%"
              height="45px"
              color="black"
            />
            <p className="badge-container"></p>
          </div>
          
          {/* </div> */}
          <div className="google-button">
            <Buttons label="GOOGLE" width="15ch" height="45px" color="black" />
            <Buttons label="" width="15ch" height="45px" color="black" />
          </div>
        </div>

        <div className="footer-post">
          <Footer />
        </div>
      </div>
      <div className="side-image">
        {promotionImage ? (
          <img src={promotionImage} />
        ) : (
          <img
            style={{
              width: promotionImageSize ? promotionImageSize : "",
              paddingLeft: promotionImagePositionLeft
                ? promotionImagePositionLeft
                : "",
              paddingRight: promotionImagePositionRight
                ? promotionImagePositionRight
                : "",
              paddingTop: promotionImagePositionTop
                ? promotionImagePositionTop
                : "",
              paddingBottom: promotionImagePositionBottom
                ? promotionImagePositionBottom
                : "",
            }}
            src={LoginPromotionImage}
          />
        )}
        <div>
          <div>
        <p></p>
        <p></p>
        <p></p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
