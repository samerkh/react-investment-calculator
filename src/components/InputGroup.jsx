import React from "react";
import InputField from "./InputField";

export default function InputGroup({ onInputChange, userInput }) {
  function handleChange(input, value) {
    userInput = { ...userInput, [input]: parseFloat(value) };

    onInputChange(userInput);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="initial investment"
          onChange={(e) => {
            handleChange("initialInvestment", e.target.value);
          }}
          value={userInput.initialInvestment}
        />
        <InputField
          label="annual investment"
          onChange={(e) => {
            handleChange("annualInvestment", e.target.value);
          }}
          value={userInput.annualInvestment}
        />
      </div>

      <div className="input-group">
        <InputField
          label="expected return"
          onChange={(e) => {
            handleChange("expectedReturn", e.target.value);
          }}
          value={userInput.expectedReturn}
        />
        <InputField
          label="duration"
          onChange={(e) => {
            handleChange("duration", e.target.value);
          }}
          value={userInput.duration}
        />
      </div>
    </div>
  );
}
