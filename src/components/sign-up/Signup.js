import React, { useState } from 'react'
import "./Signup.css"
import { Button } from "../button/Button"
import { useThemeContext } from '../../context'

export const Signup = () => {
  const { theme } = useThemeContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.password
    ) {
      alert("Sign Up Successful");
      console.log(formData);
    } else {
      alert("Please enter all fields");
    }
  };
  return (
    <div id='container'>
      <form id='form-container' style={{backgroundColor: theme === "dark" ? '#020839d3' : "#f3c2c2", color: theme === "dark" ? "#ffff" : "#333"}}>
        <h1>Sign Up</h1>
        <input className='inputClass' type='text' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange}/>
        <input className='inputClass' type='text' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange}/>
        <input className='inputClass' type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
        <input className='inputClass' type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
        <Button type="submit" onClick={handleSubmit}>Sign Up</Button>
      </form>
    </div>
  )
}

