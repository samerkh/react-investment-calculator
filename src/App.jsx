import React from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";
function App() {
  const [result, setResult] = React.useState([]);
  const handleInputChange = (input) => {
    const res = calculateInvestmentResults(input);
    setResult(res);
  };

  return (
    <>
      <Header />
      <InputGroup onInputChange={handleInputChange} />
      <Result result={result} />
    </>
  );
}

export default App;
