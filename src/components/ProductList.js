import React from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
export default function ProductList({ currentProducts, setCurrentProduct }) {
  return (
    <ListGroup>
      {currentProducts.map((product) => (
        <ListGroup.Item key={product.id}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>
              {product.name} ({product.manufacturer}): €{product.price}
            </span>
            <Button
              variant="outline-primary"
              onClick={() => setCurrentProduct(product)}
            >
              Check
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
