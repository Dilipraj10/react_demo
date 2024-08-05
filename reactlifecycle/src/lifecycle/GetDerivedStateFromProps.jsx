import React, { Component } from 'react'

export default class GetDerivedStateFromProps extends Component {
    constructor(props){
      super(props)
      this.state = {
        favorirteColor:"red"
      }
    }

    static getDerivedStateFromProps(props, state){
        console.log("executes before render method is runs");
        return {favorirteColor:props.fav}
    }

  render() {
    return (
      <>
      <h1>My Favorite color is: {this.state.favorirteColor}</h1>
      </>
    )
  }
}
