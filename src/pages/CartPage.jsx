import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectShipping } from "../redux/cartSlice";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, total, shipping } = useSelector((state) => state.cart);
  const [showHelp, setShowHelp] = useState(false);

  const handleShippingChange = (e) => {
    dispatch(selectShipping(e.target.value));
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Your Cart</h2>
      <Row>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          items.map((item, index) => (
            <Col md={6} key={index} className="mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: R{item.price.toLocaleString()}</Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <h4>Total: R{total.toLocaleString()}</h4>

      <Form className="mt-4">
        <Form.Group>
          <Form.Label>Select Shipping Method:</Form.Label>
          <Form.Select value={shipping || ""} onChange={handleShippingChange}>
            <option value="">Choose...</option>
            <option value="Intercity Auto Mover">
              Intercity Auto Mover -{" "}
            </option>
            <option value="Wise Auto">Wise Auto - </option>
          </Form.Select>
        </Form.Group>

        <Button variant="link" onClick={() => setShowHelp(true)}>
          Need help choosing a shipping method?
        </Button>
      </Form>

      <Modal show={showHelp} onHide={() => setShowHelp(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Intercity Auto Movers:</strong> Delivered in 5-7 business
            days. Best for routine purchases.
          </p>
          <p>
            <strong>Wise Move:</strong> Delivered in 1-2 business days. Ideal
            for urgent orders.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHelp(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CartPage;
