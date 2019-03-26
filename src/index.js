import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";

import "./styles.css";

function App() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
