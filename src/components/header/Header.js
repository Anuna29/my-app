import React from "react";
import "./Header.css";
import { Switch } from '@mui/material';
import { useThemeContext } from "../../context/";


export const Header = () => {
  const { theme, setTheme } = useThemeContext();

 
  return <div id="header-container" style={{backgroundColor: theme === "dark" ? '#020839d3' : "#f3c2c2", color: theme === "dark" ? "#ffff" : "#333"}}>
    <div>{theme === 'dark' ? "Dark theme" : "Light theme"}</div>
    <div>
      <Switch onChange={(e) => {setTheme(e.target.checked ? "dark" : "light")}} checked={theme === "dark" ? true : false}/>
    </div>
  </div>
}