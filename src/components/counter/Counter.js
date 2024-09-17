import React, { useState } from 'react'
import "./Counter.css"
import { Button } from "../button"

export const Counter = () => {
  const [counter, setCounter]= useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  }

  const decrement = () => {
    // Ternary operator is used to check the consition
    // condition ? trueCase : falseCase
      setCounter((prev)=> (prev > 0 ? prev -1 : prev))
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div id='counter-container'>
      <h2>Counter app</h2>
      <div id='counter'>
        <span id='count'>{counter}</span>
        <div id='button-container'>
          <Button id='decrement' onClick={decrement}>-</Button>
          <Button id='increment' onClick={increment}>+</Button>
          <Button id='reset' onClick={reset}>Reset</Button>
        </div>
      </div>
    </div>
  )
}