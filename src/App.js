import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import AccessoriesView from "./views/AccessoriesView";
import ShirtView from "./views/ShirtView";
import JacketView from "./views/JacketView";
import HomeView from "./views/HomeView";
const switches = (
  <Switch>
    <Route path="/jackets">
      <JacketView />
    </Route>
    <Route path="/shirts">
      <ShirtView />
    </Route>
    <Route path="/accessories">
      <AccessoriesView />
    </Route>
    <Route path="/">
      <HomeView />
    </Route>
  </Switch>
);
function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        {switches}
      </div>
    </Router>
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
