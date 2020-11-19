import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import requests from "../utils/requests";

export default function InfoView({ currentProduct }) {
  const [refetch, setRefetch] = useState(false);
  const [availability, setAvailability] = useState("");
  useEffect(() => {
    setAvailability("");
    if (
      Object.keys(currentProduct).length !== 0 &&
      currentProduct.name !== null
    ) {
      checkAvailability(currentProduct.manufacturer);
    }
  }, [currentProduct]);

  let checkAvailability = async (manufacturer) => {
    setRefetch(false);
    let response = await requests.getAvailabilityByManafacturer(
      manufacturer,
      0
    );
    if (response && response !== "Fetch error") {
      searchProduct(response.response);
    } else {
      setRefetch(true);
    }
  };

  let searchProduct = (products) => {
    let searchResult = products.find(
      (product) => product.id.toUpperCase() === currentProduct.id.toUpperCase()
    );
    if (searchResult) {
      setAvailability(
        searchResult.DATAPAYLOAD.substring(
          31,
          searchResult.DATAPAYLOAD.length - 31
        )
      );
    } else {
      setRefetch(true);
    }
  };
  let decideCardContent = () => {
    if (Object.keys(currentProduct).length === 0) {
      return <div>Check product detail</div>;
    } else if (refetch === true) {
      return (
        <div>
          <Button
            variant="danger"
            onClick={() => checkAvailability(currentProduct.manufacturer)}
          >
            Retry?
          </Button>
        </div>
      );
    } else if (availability !== "") {
      return (
        <Card>
          <Card.Body>
            <Card.Title>
              <b>{currentProduct.name}</b>
            </Card.Title>
            <Card.Text>
              <b>Status:</b> {availability}
            </Card.Text>
            <Card.Text>
              <b>Type:</b> {currentProduct.type}
            </Card.Text>
            <Card.Text>
              <b>Manufacturer:</b> {currentProduct.manufacturer}
            </Card.Text>
            <Card.Text>
              <b>Price:</b> €{currentProduct.price}
            </Card.Text>
            <Card.Text>
              <b>ID:</b> {currentProduct.id}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }
  };

  return (
    <div>
      <h3 className="py-2">Details</h3>
      {decideCardContent()}
    </div>
  );
}
