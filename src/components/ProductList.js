import React from "react";
import { ListGroup, Button } from "react-bootstrap";
export default function ProductList({ currentProducts, setCurrentProduct }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <b>PRODUCT_NAME (manufaturer): €price</b>
      </ListGroup.Item>
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
              variant="primary"
              className="btn-sm"
              style={{ borderRadius: 10 }}
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
