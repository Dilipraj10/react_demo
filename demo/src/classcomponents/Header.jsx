import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      favorite:"red"
    }
  }
  
  // using getDerivedStateFromProps

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps - props.color:", props.color);
    // return {favorite:props.color}  //for the upadting this is not required
  }    

  //using componentDidMount

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({favorite:"blue"})
  //     console.log("color changed");
  //   }, 1000)
  // }

  changeColor = (e) => {
    e.preventDefault()
    console.log("hii");
    this.setState({favorite:"Black"})
  }

  //by default its true so we need to make it as a false so its dont update

  // shouldComponentUpdate(){
  //   return false;
  // }

  render() {
    return (
      <div>
        <h1>Color is: {this.state.favorite}</h1>
        <p>{console.log(this.state.favorite)}</p>
        <button onClick={this.changeColor}>Color change</button>
      </div>
    )
  }
}
