import React from "react";
export default function InputField({ label, ...props }) {
  return (
    <p>
      <label>{label}</label>
      <input type="number" {...props} />
    </p>
  );
}
