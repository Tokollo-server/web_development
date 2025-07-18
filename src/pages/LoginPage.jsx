import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername } from "../redux/userSlice";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Local state to store the entered username
  const [usernameInput, setUsernameInput] = useState("");

  // Handle form submission
  const handleLogin = (e) => {
    // Prevent page refresh on form submit
    e.preventDefault();

    if (usernameInput.trim()) {
      // Dispatch to Redux store
      dispatch(setUsername(usernameInput));
      navigate("/");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
