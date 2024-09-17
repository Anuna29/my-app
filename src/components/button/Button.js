import React from 'react'
import "./Button.css"

export const Button = (props) => {
  const {size, children, ...rest} = props;

  const buttonSize = size ? size : "medium";
  return (
    <div>
      <button className="buttonClass" id={buttonSize} {...rest}>{children}</button>
    </div>
  )
}