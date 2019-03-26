import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <AppLayout>
        <Route exact path="/" component={Home} />
      </AppLayout>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
