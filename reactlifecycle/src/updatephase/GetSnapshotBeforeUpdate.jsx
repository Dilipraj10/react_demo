import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdate extends Component {
    constructor(props){
      super(props)
      this.state = {
        color:"red"
      }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({color:"blue"})
        }, 1000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML = "my fav color: " + prevState.color
    }

    componentDidUpdate(){
        document.getElementById("div2").innerHTML = "my fav color after update: " + this.state.color
    }

  render() {
    return (
      <>
      <div id='div1'></div>
      <div id='div2'></div>
      </>
    )
  }
}
