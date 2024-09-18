import React, { useEffect } from 'react'

export const FunctionalComponents = (props) => {
  const {theme} = props;

  useEffect(() => {
    console.log(`Theme: ${theme} has been updated!`);
  },[theme])

  return (
    <div>
      <h1>This is Functional Component</h1>
      </div>
  )
}