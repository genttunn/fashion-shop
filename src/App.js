import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { LoadingContext, CheckingAvailabilityContext } from "./shared/Context";
import NavigationBar from "./components/NavigationBar";
import ProductView from "./views/ProductView";
import InfoView from "./views/InfoView";
import { PRODUCT_TYPE } from "./utils/requests";

function App() {
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <CheckingAvailabilityContext.Provider value={{ checking, setChecking }}>
        <Router>
          <div className="App">
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
      </CheckingAvailabilityContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
