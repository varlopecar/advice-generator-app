import { React, useState, useEffect } from "react";
import Advice from "./components/Advices/Advice";
import getAdvice from "./services/advice";

function App() {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetchAdvice();
  });
    

  const fetchAdvice = () => {
    getAdvice().then((response) => {
      setAdvice(response);
    });
  }

  return (
    <Advice advice={advice} fetchAdvice={fetchAdvice} />
  );
}

export default App;
 