// import React, { useEffect, useState } from 'react'

// export default function Demo() {
//     const [header, setHeader] = useState('welcome to react hooks')

//     useEffect(() => {
//         const title = document.getElementById("header");
//         setTimeout(() => {
//             title.innerHTML = header
//         },3000)
//     });

//   return (
//     <>
//     <div id='header'>welcome to functional component</div>
//     <input
//     type='text'
//     value={header}
//     onChange={(e) => {setHeader(e.target.value)}}
//     />
//     </>
//   )
// }

import React, { Component } from "react";

const Unstable = React.memo(function Unstable(props) {
  console.log("rendered");
  return (
    <div>{props.value}</div>
  );
})

export default class Demo extends Component {
  state = {
    value: 1,
  };

  componentDidMount(){
    setInterval(() => {
      this.setState(() => {
        return {value: 1}
      })
    },2000)
  }

  render() {
    return (
      <>
        <div>
          <Unstable value = {this.state.value} />
        </div>
      </>
    );
  }
}
