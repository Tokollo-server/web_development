import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products.json";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import carData from "../data/products.json";

const StorePage = () => {
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  //const getImage = (filename) => require(`../assets/${filename}`);

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shop Vehicles</h2>
      <Row>
        {carData.map((car) => (
          <Col key={car.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={`/images/${car.image}`}
                alt={car.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>{car.description}</Card.Text>
                <Card.Text>
                  <strong>Price:</strong> R{car.price.toLocaleString()}
                </Card.Text>
                <Button variant="primary" onClick={() => handleAdd(car)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StorePage;
