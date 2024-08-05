import React, { Component } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';



export default class DemoCards extends Component {
    constructor(props){
      super(props)
      this.state = {
        users:[],
        userId:"",
        username:"",
        gmail:""
      }
    }

    componentDidMount(){
        this.getUsers()
    }

    getUsers = () => {
        axios.get("http://localhost:8080/api/gaming/alluser")
        .then(res => {
            console.log(res);
            this.setState({users:res.data.data})
        })
        .catch(err => {
            console.log(err);
            alert("Unable to fetch the user")
        })
    }

  render() {
    return (
      <>
        <div>
            {this.state.users.map(user => {
                return (
                    <Card style={{width:"20%"}}>
                <CardContent>
            <       Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Useraname Id {user.userId}
                    </Typography>
            <       Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Username is {user.username}
                    </Typography>
            <       Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Gmail is {user.gmail}
                    </Typography>
                </CardContent>
                </Card>
                )
            })}
        </div>
      </>
    )
  }
}
