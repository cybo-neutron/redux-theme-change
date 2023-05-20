import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";

function ThemeButton() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="bg-primary-200 dark:bg-secondary-700 dark:text-primary-300 px-3 rounded-full"
    >
      {theme === "dark" ? "light" : "dark"}
    </button>
  );
}

export default ThemeButton;
