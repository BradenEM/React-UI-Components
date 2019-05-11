import React from "react";
import "./App.css";
import NumberButton from "./components/ButtonComponents/NumberButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import ButtonContainer from "./components/ButtonComponents/ButtonContainer";
import ActionButton from "./components/ButtonComponents/ActionButton";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <ButtonContainer>
        <ActionButton className="clear-button" text="clear" />
        <NumberButton color="red-background" text="÷" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton color="white-background" text="7" />
        <NumberButton color="white-background" text="8" />
        <NumberButton color="white-background" text="9" />
        <NumberButton color="red-background" text="x" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton color="white-background" text="4" />
        <NumberButton color="white-background" text="5" />
        <NumberButton color="white-background" text="6" />
        <NumberButton color="red-background" text="−" />
      </ButtonContainer>
      <ButtonContainer>
        <NumberButton color="white-background" text="1" />
        <NumberButton color="white-background" text="2" />
        <NumberButton color="white-background" text="3" />
        <NumberButton color="red-background" text="+" />
      </ButtonContainer>
      <ButtonContainer>
        <ActionButton text="0" />
        <NumberButton color="red-background" text="=" />
      </ButtonContainer>
    </div>
  );
};

export default App;
