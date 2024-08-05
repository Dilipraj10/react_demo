import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class UpdatedGetDerivedStateFromProps extends Component {
    constructor(props){
      super(props)
      this.state = {
        color:"red"
      }
    }

    static getDerivedStateFromProps(props, state){
      console.log("before render method");
        return {color:props.color}
    }

    changeColor = (e) => {
      e.preventDefault();
      this.setState({color:"blue"})
      console.log("after this setting color, the getDerivedStateFromProps method is also called");
    }

  render() {
    return (
     <>
      <div>Color: {this.state.color}</div>
      <Button onClick={this.changeColor}>color Change</Button>
     </>
    )
  }
}
