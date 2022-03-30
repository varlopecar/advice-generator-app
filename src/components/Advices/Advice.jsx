/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState(null);

  const url = "https://api.adviceslip.com/advice";

  const fetchAdvice = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      {advice ? (
        <Card>
          <div className="advice-number">ADVICE #{advice.slip.id}</div>
          <div className="advice-description">
            <p className="text-description">"{advice.slip.advice}"</p>
          </div>
          <div>
            <img className="pattern" />
          </div>
          <Button advice={fetchAdvice} />
        </Card>
      ) : null}
    </div>
  );
};

export default Advice;
