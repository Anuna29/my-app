import React, { useState } from 'react'
import "./Signin.css"
import { Button } from '../button'
import { useThemeContext } from '../../context'

export const Signin = () => {
  const {theme} = useThemeContext();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email &&
      formData.password
    ){
      alert("Sign In Successful");
    }else{
      alert("Please enter all fields.")
    }
  }

  return (
    <div id='container'>
      <form id='form-container' style={{backgroundColor: theme === "dark" ? '#020839d3' : "#f3c2c2", color: theme === "dark" ? "#ffff" : "#333"}}>
        <h1>Sign In</h1>
        <input className='inputClass' type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange}/>
        <input className='inputClass' type='password' placeholder='Password' name='password' value={formData.password} onChange={handleChange}/>
        <Button type="submit" onClick={handleSubmit}>Sign In</Button>
      </form>
    </div>
  )
}
