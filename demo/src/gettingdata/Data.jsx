import React, { Component } from "react";
import GetAxios from "./GetAxios";
import axios from "axios";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("http://localhost:8080/api/gaming/alluser")
      .then((res) => {
        this.setState({ datas: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <GetAxios datas = {this.state.datas}/>
      </div>
    );
  }
}
