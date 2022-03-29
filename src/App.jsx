import React, { useState, useEffect } from 'react';
import Advice from "./components/Advices/Advice";

function App() {
  const [advice, setAdvice] = useState(null);

  const url = "https://api.adviceslip.com/advice";

  const fetchAdvice = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAdvice(url);
  }, []);

  return (
    <Advice advice={advice} />
  ) 
}

export default App;
