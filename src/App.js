import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { LoadingContext } from "./shared/Context";
import { PRODUCT_TYPE } from "./utils/requests";
import NavigationBar from "./components/NavigationBar";
import ProductView from "./views/ProductView";
import InfoView from "./views/InfoView";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <Router>
        <div className="App" style={{ textAlign: "center" }}>
          <NavigationBar />
          <div className="container-fluid p-0">
            <Row className="px-5">
              <Col sm={8} className="px-0">
                <Switch>
                  <Route path="/jackets">
                    <ProductView
                      category={PRODUCT_TYPE.JACKETS}
                      currentProduct={currentProduct}
                      setCurrentProduct={setCurrentProduct}
                    />
                  </Route>
                  <Route path="/shirts">
                    <ProductView
                      category={PRODUCT_TYPE.SHIRTS}
                      currentProduct={currentProduct}
                      setCurrentProduct={setCurrentProduct}
                    />
                  </Route>
                  <Route path="/accessories">
                    <ProductView
                      category={PRODUCT_TYPE.ACCESSORIES}
                      currentProduct={currentProduct}
                      setCurrentProduct={setCurrentProduct}
                    />
                  </Route>
                  <Route path="/">
                    <ProductView
                      category={PRODUCT_TYPE.JACKETS}
                      currentProduct={currentProduct}
                      setCurrentProduct={setCurrentProduct}
                    />
                  </Route>
                </Switch>
              </Col>
              <Col sm={4} className="px-0">
                <InfoView currentProduct={currentProduct} />
              </Col>
            </Row>
          </div>
        </div>
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;
