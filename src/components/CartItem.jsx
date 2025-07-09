import React from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item, onIncrease, onDecrease }) => {
  const dispatch = useDispatch();

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>Price: R{item.price.toLocaleString()}</Card.Text>
        <InputGroup className="mb-3" style={{ maxWidth: "140px" }}>
          <Button
            variant="outline-secondary"
            onClick={() => onDecrease(item.id)}
          >
            -
          </Button>
          <Form.Control
            readOnly
            value={item.quantity || 1}
            className="text-center"
          />
          <Button
            variant="outline-secondary"
            onClick={() => onIncrease(item.id)}
          >
            +
          </Button>
        </InputGroup>
        <Button
          variant="danger"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
