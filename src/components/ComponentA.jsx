import React from "react";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  console.log("rendered component A");
  return (
    <div>
      <h2>Component A</h2>
      <ComponentC />
    </div>
  );
};

export default ComponentA;
