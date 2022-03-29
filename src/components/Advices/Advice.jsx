import Card from "../UI/Card";
import Button from "../UI/Button";
import "./Advice.css";

const Advice = ({advice}) => {
  console.log(advice.slip.id);
  return (
    <Card>
      <div className="advice-number">ADVICE #{advice.slip.id}</div>
      <div className="advice-description">
        <p className="text-description">
        "{advice.slip.advice}"
        </p>
      </div>
      <div>
        <img
          className="pattern"
        />
      </div>
      <Button />
    </Card>
  );
};

export default Advice;
