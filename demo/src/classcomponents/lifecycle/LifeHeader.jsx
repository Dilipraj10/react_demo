import React from "react";

export class LifeHeaders extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color:"red"
        }
    }

    changeColor = () => {
        this.setState({color:"blue"})
    }

    // componentDidMount(){
    //     setTimeout(() =>{
    //         this.setState({color:"blue"})
    //     }, 1000)
    // }

    getSnapshotBeforeUpdate(preProps, preState){
        document.getElementById("heading1").innerHTML = "previous color is:" + preState.color;
    }

    componentDidUpdate(){
        document.getElementById("heading2").innerHTML = "updated color is:" +this.state.color;
    }

    render(){
        return(
            <>
            <div>
                <h1>Color is: {this.state.color}</h1>
                <button onClick={this.changeColor}>color change</button>
                <h1 id="heading1"></h1>
                <h1 id="heading2"></h1>
            </div>
            </>
        )
    }
}