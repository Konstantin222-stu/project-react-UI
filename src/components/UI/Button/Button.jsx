import React from "react";
import "./button.css";

const Button = ({ variant, disableShadow, disabled, size, color, children = "Default" }) => {
  const rootClass = [
    variant,
    disableShadow ? 'disableShadow' : '',
    size,
    color
  ].filter(Boolean).join(' ');

  return (
    <button className={rootClass} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;