import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [buttonThemeToggler, setButtonThemeToggler] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        fontSize : "15px"
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        onClick={ () => {
          setButtonThemeToggler(buttonThemeToggler==="contrast" ? "dark" : buttonThemeToggler==="dark" ? "light" : "contrast")
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`
        }}
      >
        {buttonThemeToggler==="contrast" ? "Turn Dark" : buttonThemeToggler==="dark" ? "Turn Light" : "Turn Contrast"}
      </button>
    </div>
  );
};

export default HeroSection;
