import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Child from './Child'

export default class Container extends Component {
    constructor(props){
      super(props)
      this.state = {
        show:true
      }
    }

    deleteHeader = () => {
        this.setState({show:false})
    }
    
  render() {
    let myHeader
    if(this.state.show){
        myHeader = <Child/>
    }
    return (
      <>
        {myHeader}
        <Button onClick={this.deleteHeader}>delete header</Button>
      </>
    );
  }
}
