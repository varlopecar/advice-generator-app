/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "../../styles/Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  const url = "https://api.adviceslip.com/advice";

  const fetchAdvice = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAdvice(data);
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAdvice(data);
    //   })
    //   .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchAdvice()
  }, []);

  return (
    <div>
      {advice ? (
        <Card>
          <div className="advice-number">ADVICE #{advice.slip.id}</div>
          <div className="advice-description">
            <p className="text-description">{`"${advice.slip.advice}"`}</p>
          </div>
          <div>
            <img className="pattern" alt="pattern" />
          </div>
          <Button action={fetchAdvice} />
        </Card>
      ) : null}
    </div>
  );
};

export default Advice;
