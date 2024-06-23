import React from "react";
import Header from "./components/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";
import { INITIAL_INPUT } from "./util/constants";
function App() {
  const [userInput, setUserInput] = React.useState(INITIAL_INPUT);

  function handleInputChange(inputName, value) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputName]: +value };
    });
  }

  return (
    <>
      <Header />
      <InputGroup onInputChange={handleInputChange} userInput={userInput} />
      <Result userInput={userInput} />
    </>
  );
}

export default App;
