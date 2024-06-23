import React from "react";
import { formatter } from "../util/investment";

export default function Result({ result }) {
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
          result.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.annualInvestment)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{0}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
