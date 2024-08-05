import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import axios from 'axios';


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
                
    handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email:this.state.email,
            password:this.state.password
        }
        
        axios.post("http://localhost:8080/api/v1/library/userlogin",user)
        .then(res => {
            if(res.data.message === "User Login Successfully!"){
                console.log(res.data);
                alert("Login Successful")
            }
            else{
                alert("Invalid Creditionals")
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

  render() {
    return (
      <>
      <div style={{width:"30%", justifyContent:"center", display:"flex", textAlign:"center",
        border:"2px solid black", marginLeft:"400px", marginTop:"100px"
      }}>
      <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login Here</Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" 
        placeholder="Enter email" 
        value={this.state.email}
        onChange={(e) => {this.setState({email:e.target.value})}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" 
        placeholder="Password" 
        value={this.state.password}
        onChange={(e) => {this.setState({password:e.target.value})}}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>
      </>
    )
  }
}
