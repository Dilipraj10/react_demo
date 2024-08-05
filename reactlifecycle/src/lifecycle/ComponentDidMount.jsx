import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(props){
      super(props)
      this.state = {
        favColor:"red"
      }
    }

    componentDidMount() {
        console.log("renderd after the component is mounted");
        setTimeout(() => {
            this.setState({favColor:"yellow"})
        }, 1000);
    }
  render() {
    return (
      <div>Favorite color is: {this.state.favColor}</div>
    )
  }
}
