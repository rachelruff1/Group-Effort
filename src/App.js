import React, { Component } from "react";
import routes from "./routes";
import AppHeader from "./Components/Header/AppHeader/AppHeader";
class App extends Component {
  render() {
    return <div className="App">
      <AppHeader />
      <div>
      {routes}
      </div></div>;
  }
}

export default App;
