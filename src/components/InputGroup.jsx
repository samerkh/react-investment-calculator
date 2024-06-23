import React from "react";
import InputField from "./InputField";

export default function InputGroup({ onInputChange, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="initial investment"
          onChange={(e) => {
            onInputChange("initialInvestment", e.target.value);
          }}
          value={userInput.initialInvestment}
        />
        <InputField
          label="annual investment"
          onChange={(e) => {
            onInputChange("annualInvestment", e.target.value);
          }}
          value={userInput.annualInvestment}
        />
      </div>

      <div className="input-group">
        <InputField
          label="expected return"
          onChange={(e) => {
            onInputChange("expectedReturn", e.target.value);
          }}
          value={userInput.expectedReturn}
        />
        <InputField
          label="duration"
          onChange={(e) => {
            onInputChange("duration", e.target.value);
          }}
          value={userInput.duration}
        />
      </div>
    </div>
  );
}
