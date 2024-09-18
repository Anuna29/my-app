import React, { Component } from 'react'

export default class ClassComponents extends Component {
  componentDidMount() {
    console.log("This will run after the component is displayed");
  }

  componentWillUnmount() {
    console.log("This will run when the component is removed");
  }

  componentDidUpdate() {
    console.log("This will run when the component is updated");
    console.log(this.props.theme)
  }
  render() {
    return (
      <div>
        <h1>This is class Component</h1>
      </div>
    )
  }
}
