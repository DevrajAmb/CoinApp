import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { switchTheme } from "../features/theme/themeSlice";

const ThemeButton = () => {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleThemeSwitch = () => {
    dispatch(switchTheme());
    localStorage.setItem("theme", JSON.stringify(theme ? false : true));
  };

  return (
    <button
      onClick={handleThemeSwitch}
      className={
        theme
          ? "fixed bottom-3 left-3 bg-gray-100 text-xl py-4 px-4 rounded-full text-yellow-500 hover:cursor-pointer"
          : "fixed bottom-3 left-3 bg-gray-900 text-xl py-4 px-4 rounded-full text-white hover:cursor-pointer"
      }
    >
    </button>
  );
};

export default ThemeButton;
