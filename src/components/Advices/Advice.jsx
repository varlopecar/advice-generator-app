import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Advice.css";

const Advice = (props) => {
  return (
    <Card className="card">
      <div className="advice-number">ADVICE #123</div>
      <div className="advice-description">
        <p className="text-description">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          consectetur quos pariatur"
        </p>
      </div>
      <div>
        <img
          className="pattern"
          src="src\assets\images\pattern-divider-desktop.svg"
        />
      </div>
      <Button />
    </Card>
  );
};

export default Advice;
