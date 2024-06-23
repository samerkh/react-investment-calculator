import React from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
import { INITIAL_INPUT } from "./util/constants";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [userInput, setUserInput] = React.useState(INITIAL_INPUT);
  const result = calculateInvestmentResults(userInput);

  const handleInputChange = (input) => {
    setUserInput(input);
  };

  return (
    <>
      <Header />
      <InputGroup onInputChange={handleInputChange} userInput={userInput} />
      <Result result={result} />
    </>
  );
}

export default App;
