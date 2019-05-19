import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>
        </div>
    );
  }
}

export default App;
