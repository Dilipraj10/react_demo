import React from "react";

export class Car extends React.Component(){
    constructor(props){
      super(props)
      this.state = {
        name:"dilip",
        age:23
      }
    }
    render(){
        return(
            <>
            <h1>hiii</h1>
            </>
        )
    }
}