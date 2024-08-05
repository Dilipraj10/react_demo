import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Child from '../unmounting/Child';

export default class Lifecycle extends Component {
    constructor(props){
      super(props)
      this.state = {
        color:"red",
        show:true
      }
    }

    // static getDerivedStateFromProps(props, state){
    //     log("executes when component intinalize and also when updated")
    //     return {color:props.color}
    // }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color:"green"})
            console.log("executes after component mounts");
        }, 1000);
    }

    shouldComponentUpdate() {
        console.log("executes when the state changes, if its false it wont run");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("gives the prev state value");
        document.getElementById("h1").innerHTML = "before changing: " + prevState.color
    }
    
    componentDidUpdate(){
        console.log("executes after component updated");
        document.getElementById("h2").innerHTML = "before changing: " + this.state.color 
    }

    colorChange = () => {
        this.setState({color:"blue"})
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
     <h1>Color: {this.state.color}</h1>
     <Button onClick={this.colorChange}>Color Change</Button>
     <Button onClick={this.deleteHeader}>Delete Header</Button>
     <h3 id='h1'></h3>
     <h3 id='h2'></h3>
     </>
    )
  }
}
