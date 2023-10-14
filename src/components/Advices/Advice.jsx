/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "../../styles/Advice.css";

const Advice = ({ advice, fetchAdvice }) => {
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
