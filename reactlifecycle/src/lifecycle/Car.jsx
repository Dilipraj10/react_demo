import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class Car extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"mini cooper",
            price:2500000
        }
    }

    handleClick = () => {
        this.setState({name:"Audi"})
    }

  render() {
    return (
      <>
      <div>Im car my name: {this.state.name}</div>
      <div>Im car my color: {this.props.color}</div>
      <div>Im car my price: {this.state.price}</div>
      <Button  onClick={this.handleClick}>Click to change Name</Button>
      </>
    )
  }
}
