import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import products from "../data/products.json";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

const StorePage = () => {
  const dispatch = useDispatch();

  // State for search input, transmission filter, and sort option
  const [search, setSearch] = useState("");
  const [transmission, setTransmission] = useState("All");
  const [sort, setSort] = useState("low");

  // Dispatch action to addd product to cart
  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  // Filter and sort logic for displaying products
  const filteredProducts = products
    .filter((car) => car.name.toLowerCase().includes(search.toLowerCase()))
    .filter(
      (car) => transmission === "All" || car.transmission === transmission
    )
    .sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Shop Vehicles</h2>

      {/* Filter Section */}
      <Form className="mb-4 d-flex flex-wrap gap-4">
        <Form.Group controlId="searchCar">
          <Form.Label>Search by Name/Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="e.g. BMW, Golf"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="filterTransmission">
          <Form.Label>Filter by Transmission</Form.Label>
          <Form.Select
            value={transmission}
            onChange={(e) => setTransmission(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="sortPrice">
          <Form.Label>Sort by Price</Form.Label>
          <Form.Select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </Form.Select>
        </Form.Group>
      </Form>

      {/* Cars Display */}
      <Row>
        {filteredProducts.map((car) => (
          <Col key={car.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={car.image}
                alt={car.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{car.name}</Card.Title>
                <Card.Text>Price: R{car.price.toLocaleString()}</Card.Text>
                <Card.Text>KM: {car.km.toLocaleString()} km</Card.Text>
                <Card.Text>Transmission: {car.transmission}</Card.Text>
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
