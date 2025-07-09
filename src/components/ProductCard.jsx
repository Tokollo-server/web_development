import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> R{product.price.toLocaleString()}
        </Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
