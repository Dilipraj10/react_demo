import React from "react";

export class Car extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        brand:"mini cooper",
        model:"mini001",
        color:"neon"
      }
    }

    handleChange = () => {
        this.setState({color:"red"})
    }
    render(){
        return(
            <>
            <h1>Welcome to car factory</h1>
            <h1>Brand:{this.state.brand}</h1>
            <h1>Model:{this.state.model}</h1>
            <h1>color:{this.state.color}</h1>
            <button onClick={this.handleChange}>Change color</button>
            </>
        );
    }
}