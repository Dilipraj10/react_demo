import React, { Component } from 'react'
import Car from './Car'

export default class InsideComponent extends Component {
  render() {
    return (
      <div>
        <h1>Calling Car component</h1>
        <Car color = "red"/>
      </div>
    )
  }
}
