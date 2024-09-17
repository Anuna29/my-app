import React from "react";
import "./Header.css";
import { Switch } from '@mui/material';
import { useThemeContext } from "../../context/ThemeContext";

export const Header = () => {
  const { theme, toggleTheme } = useThemeContext();

  const handleChange = () => {
    toggleTheme();
  }
  return <div id="header-container" style={{backgroundColor: theme === "dark" ? '#020839d3' : "#f3c2c2", color: theme === "dark" ? "#ffff" : "#333"}}>
    <div>{theme === 'dark' ? "Dark theme" : "Light theme"}</div>
    <div>
      <Switch onChange={handleChange} checked={theme === "dark" ? true : false}/>
    </div>
  </div>
}