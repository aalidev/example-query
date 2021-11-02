import React, { useContext } from "react";
import { MyContenxt } from "../MyContext";
import { useLocation, useHistory } from "react-router-dom";

const ComponentB = () => {
  console.log("rendered component B");
  const { count } = useContext(MyContenxt);
  const query = new URLSearchParams(useLocation().search);
  const history = useHistory();

  function setJobId(id) {
    query.set("id", id);
    history.replace({
      search: query.toString(),
    });
  }

  return (
    <div>
      <i>{count}</i>
      <h2>Component B</h2>
      <button onClick={() => setJobId(Math.floor(Math.random() * 10))}>
        Increase
      </button>
    </div>
  );
};

export default ComponentB;
