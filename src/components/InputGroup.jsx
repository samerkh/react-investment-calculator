import React from "react";
import InputField from "./InputField";

export default function InputGroup({ onInputChange }) {
  const [initialInvestment, setInitialInvestment] = React.useState(0);
  const [annualInvestment, setAnnualInvestment] = React.useState(0);
  const [expectedReturn, setExpectedReturn] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  function handleChange() {
    onInputChange({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <InputField
          label="initial investment"
          onChange={(e) => {
            setInitialInvestment(e.target.value);
            handleChange();
          }}
          value={initialInvestment}
        />
        <InputField
          label="annual investment"
          onChange={(e) => {
            setAnnualInvestment(e.target.value);
            handleChange();
          }}
          value={annualInvestment}
        />
      </div>

      <div className="input-group">
        <InputField
          label="expected return"
          onChange={(e) => {
            setExpectedReturn(e.target.value);
            handleChange();
          }}
          value={expectedReturn}
        />
        <InputField
          label="duration"
          onChange={(e) => {
            setDuration(e.target.value);
            handleChange();
          }}
          value={duration}
        />
      </div>
    </div>
  );
}
