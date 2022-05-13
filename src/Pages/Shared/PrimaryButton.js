import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary border-0">
      {children}
    </button>
  );
};

export default PrimaryButton;
