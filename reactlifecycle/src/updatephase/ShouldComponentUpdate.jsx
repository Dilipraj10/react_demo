import React, { Component } from "react";
import Button from 'react-bootstrap/Button'

export default class ShouldComponentUpdate extends Component {
    constructor(props){
      super(props)
      this.state = {
        color:"red"
      }
    }

    shouldComponentUpdate(){
        return false;
    }

    changeColor = () => {
        console.log("Changes depends on shouldComponentUpdate if its true color changes otherwise don't");
        this.setState({color:"blue"})
    }

  render() {
    return (
      <>
        <div>color: {this.state.color}</div>
        <Button onClick={this.changeColor}>change color</Button>
      </>
    );
  }
}
