import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const MyContenxt = createContext();

function MyContextProvider(props) {
  const [count, setCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    console.log("over");
    async function getSingleCountryData(id) {
      const result = await new Promise((resolve) =>
        setTimeout(() => resolve(id), 2000)
      );
      setCount(result);
    }
    if (location.search) {
      console.log("get");
      getSingleCountryData(query.get("id"));
    }
  }, [location]);

  return (
    <MyContenxt.Provider value={{ count }}>
      {props.children}
    </MyContenxt.Provider>
  );
}

export default MyContextProvider;
