import React, { Component } from 'react'
import Child from './Child';

export default class MyHeader extends Component {
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }

    removeText = () => {
        this.setState({show:false})
    }

  render() {
    let header;
    if(this.state.show){
        header = <Child/>
    }
    return (
      <div>
        {header}
        <button onClick={this.removeText}>Click here</button>
      </div>
    )
  }
}
