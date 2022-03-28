import Card from "../UI/Card";
import "./Advice.css";

const Advice = (props) => {
  return (
    <Card className="card">
      <div className="advice-number">ADVICE NUMBER #123</div>
      <div className="advice-description">
        <p className="text-description">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consectetur quos pariatur, dolor nisi ab consequatur expedita.
          Facilis, odit recusandae?"
        </p>
      </div>
      <img
      className="pattern" src="src\assets\images\pattern-divider-desktop.svg" />
    </Card>
  );
};

export default Advice;
