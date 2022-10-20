import { useEffect } from "react";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const history = useNavigate();
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo", JSON.stringify(data));

  //   if (userInfo) {
  //     history.push("");
  //   }
  // }, [history]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className=" title text-primary">Welcome to Admin Page</h1>
              <h4 className=" subtitle text-black">We love to have you</h4>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingbutton"
                  variant="outline-primary"
                >
                  SignUp
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
