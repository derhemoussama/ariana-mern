import React from "react";

const Button = ({ title }) => {
  return (
    <button className="w-fit border border-black px-11 py-3 hover:text-white hover:bg-black">
      {title}
    </button>
  );
};

export default Button;
