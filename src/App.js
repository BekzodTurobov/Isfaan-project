import React, { useState, useRef, useEffect } from "react";
import "./index.css";

import Wrapper from "./components/Wrapper";

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return <>{load && <Wrapper />}</>;
}

export default App;
