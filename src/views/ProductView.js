import React, { useState, useEffect, useContext } from "react";
import { Spinner } from "react-bootstrap";
import { LoadingContext } from "../shared/Context";
import requests from "../utils/requests";
import PaginationPane from "../components/PaginationPane";
import ProductList from "../components/ProductList";

export default function ProductView({ category, setCurrentProduct }) {
  const { loading, setLoading } = useContext(LoadingContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    if (loading === true) {
      fetchProducts();
    }
    console.log(category);
  }, [loading]);

  let fetchProducts = async () => {
    let array = await requests.getProductsByCategory(category);
    if (array && array.length > 0) {
      setProducts(array);
    }
    setLoading(false);
  };

  return (
    <div>
      <h3 className="py-2">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      {loading === false ? (
        <div>
          <ProductList
            setCurrentProduct={setCurrentProduct}
            currentProducts={currentProducts}
            category={category}
          />
          <PaginationPane
            currentPage={currentPage}
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
            loading={loading}
          />
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
