import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ userInput }) {
  const result = calculateInvestmentResults(userInput);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {result &&
          result.map((item, index) => {
            const totalInterest =
              item.valueEndOfYear -
              item.annualInvestment * item.year -
              initialInvestment;
            const totalAmoutInvested = item.valueEndOfYear - totalInterest;
            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmoutInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
