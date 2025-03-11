import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <footer
      className={
        theme
          ? "border border-t bg-gray-900 border-gray-800 py-2"
          : "border border-t bg-white border-gray-200 py-2"
      }
    >
      <h1 className="text-center text-sm text-gray-600">@CryptoDCX</h1>
    </footer>
  );
};

export default Footer;
