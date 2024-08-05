import React, { Component } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography'


export default class GetAxios extends Component {
    constructor(props){
      super(props)
      this.state = {
        datas:[],
        userId:"",
        username:"",
        gmail:""
      }
    }

    componentDidMount(){
        this.getData();
    }

    handleDelete = (gmail) => {
      axios.delete(`http://localhost:8080/api/gaming/delete?gmail=${gmail}`)
      .then(res => {
        console.log(res);
        alert("user successfullty deleted")
        this.getData();
        return null;
      })
      .catch(err => {
        console.log(err);
        alert("Something went wrong while deleting user")
      })
    }

    getData = () => {

        axios.get("http://localhost:8080/api/gaming/alluser")
        .then(res => {
            this.setState({datas:res.data.data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    selectUser = (gmail) =>{
      const selectedUser = this.state.datas.find(user => gmail === user.gmail);
      this.setState({userId:selectedUser.userId})
      this.setState({username:selectedUser.username})
      this.setState({gmail:selectedUser.gmail})
    } 

    handleUpdate = (e) => {
      
      e.preventDefault();
      const userData = {
        userId:this.state.userId,
        username:this.state.username,
        gmail:this.state.gmail
      }

      axios.put("http://localhost:8080/api/gaming/userupdate",userData)
        .then(res => {
          console.log(res);
          alert("User successfully updated")
          this.getData();
        })
        .catch(err => {
          console.log(err);
          alert("Unable to update")
        })
    }
   
  render() {
    return (
      <div>
        <div style={{margin:"20px",alignItems:"center"}}>
          <Form onSubmit={this.handleUpdate}>
            <Typography variant="h2" component="h2" style={{textAlign:"center"}}>
              User updatation
          </Typography>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="USERID" disabled
            value={this.state.userId}
            onChange={(e) => {this.setState({userId:e.target.value})}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="USERNAME" 
            value={this.state.username}
            onChange={(e) => {this.setState({username:e.target.value})}}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="email" placeholder="GMAIL" disabled
            value={this.state.gmail}
            onChange={(e) => {this.setState({gmail:e.target.value})}}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{width:"100%"}}>Submit</Button>
          </Form>
        </div>
        <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">USERID</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right">GMAIL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.datas.map((data) => (
            <TableRow
              key={data.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{data.userId}</TableCell>
              <TableCell align="right">{data.username}</TableCell>
              <TableCell align="right">{data.gmail}</TableCell>
              <Button varient="primary" onClick={() => {this.handleDelete(data.gmail)}}>Delete</Button>
              <Button varient="primary" onClick={() => {this.selectUser(data.gmail)}}>update</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
    )
  }
}
