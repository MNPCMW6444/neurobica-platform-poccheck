import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";

function App() {
  const [num, snum] = useState(104);

  useEffect(() => {
    const get = async () => {
      const r = await Axios.get(
        "https://neurobica-datacollection-ppoc.herokuapp.com/num"
      );
      snum(r.data);
    };
    get();
  }, []);

  return (
    <div className="App">
      <h1>{num}</h1>
    </div>
  );
}

export default App;
