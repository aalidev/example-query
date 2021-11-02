import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import MyContextProvider from "./MyContext";

function App() {
  return (
    <Router>
      <MyContextProvider>
        <div className="App">
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
        </div>
      </MyContextProvider>
    </Router>
  );
}

export default App;
