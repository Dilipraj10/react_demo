import React, { Component } from 'react'

export default class Child extends Component {

    componentWillUnmount(){
        alert("component deleting")
    }
    
  render() {
    return (
      <h1>Hellow world</h1>
    )
  }
}
