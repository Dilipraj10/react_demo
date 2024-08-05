import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/Slices/UserLoginSlice";
import { useNavigate } from "react-router-dom";

export default function UserLogin() {

  //state
  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('')

  //store state
  const {loading, error} = useSelector(state => state.userLogin)
  const state = useSelector(state => state)
  console.log("state: ", state);

  console.log("loading", loading);
  console.log("error", error);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredentials = {
      gmail,
      password
    }
    console.log("dispatch function");
    dispatch(userLogin(userCredentials))
    .then(res => {
      console.log("dispatch res");
      if(res.payload){
        setGmail('')
        setPassword('')
        navigate("/home")
      }
    }) 
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={gmail}
          onChange={(e) => {setGmail(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {loading ? "Loading...": "Login"}
        </Button>
        {error && (
          <div  style={{marginTop:"10px"}} className="alert alert-danger" role="alert">{error}</div>
        )}
      </Form>
    </>
  );
}
