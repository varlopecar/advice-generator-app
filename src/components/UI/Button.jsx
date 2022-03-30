/* eslint-disable react/react-in-jsx-scope */
import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({advice}) => {
  return (
    <div>
      <div>
        <button className="button" onClick={advice}>
          <img src="src\assets\images\icon-dice.svg" alt="dice icon" />
        </button>
      </div>
    </div>
  );
};

export default Button;
