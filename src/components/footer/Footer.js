import React from "react";
import "./Footer.css";
import { useThemeContext } from "../../context";

export const Footer = () => {
  const { theme } = useThemeContext();
  
  return <div id="footer-container" style={{backgroundColor: theme === "dark" ? '#020839d3' : "#f3c2c2", color: theme === "dark" ? "#ffff" : "#333"}}>Footer Component</div>
}