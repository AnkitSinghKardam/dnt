import React from "react";

const Button = ({
  children,
  type = "button",
  bgColor = "bg-red-500",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`p-2 rounded-md ${className} ${textColor} ${bgColor}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
