import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";

function App() {
  const [num, snum] = useState(104);
  const [numm, snumm] = useState("");
  const [nummm, snummm] = useState("");

  useEffect(() => {
    const get = async () => {
      const r = await Axios.get(
        "https://neurobica-datacollection-ppoc.herokuapp.com/num"
      );
      snum(r.data.r);
      snumm(r.data.rr);
      snummm(r.data.rrr);
    };
    get();
  }, []);

  return (
    <div className="App">
      <h1>{"sum: " + num}</h1>
      <h1>{"last name:" + numm}</h1>
      <h1>{"last Stringified: " + nummm}</h1>
    </div>
  );
}

export default App;
