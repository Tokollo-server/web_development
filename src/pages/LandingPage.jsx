import React from "react";
import { Container, Button } from "react-bootstrap";
import "./LandingPage.css";
import backgroundImage from "../assets/landing-background.png";

const LandingPage = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Container className="text-center text-white py-5">
        <h1 className="display-4 fw-bold">Welcome to Autohaus Store</h1>
        <p className="lead">Find your dream luxury car today.</p>
        <Button variant="light" href="/store">
          Browse Vehicles
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
