import React from "react";
import { MyContenxt } from "../MyContext";

const ComponentC = () => {
  console.log("rendered component C");
  return (
    <MyContenxt.Consumer>
      {({ count }) => (
        <>
          <h2>Component C</h2>
          <div style={count === 2 ? { backgroundColor: "red" } : null}>
            {count}
          </div>
        </>
      )}
    </MyContenxt.Consumer>
  );
};

export default ComponentC;
