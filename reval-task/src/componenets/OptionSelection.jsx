import React, { useEffect, useState }  from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default function OptionSelection() {

    const [token, setToken] = useState('')
    const [options, setOptions] = useState([])

    useEffect(() => {
        getToken();
    }, [token])

    const getToken = async () => {
        const response = await axios.post(
            "https://pegcon.gateway.dev.pearsoncmg.com/v1/auth/token?tenantName=IT&userId=0"
        )
        setToken(response.data)
        getData()
    }

    const getData = async () => {
        const response = await axios.get(
            "https://pegcon.gateway.dev.pearsoncmg.com/v1/Questions/100000",{
                headers:{
                    "Authorization" : 'Bearer ' + token
                }
            }
        )
        const data = response.data;
        setOptions(data)        
    }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <h4>Select Content</h4>
      </div>
      <div style={{paddingLeft:"30px", paddingTop:"2px", fontSize:"20px"}} className="ml-auto">
        <select className="dropdown-select" aria-label="User Options">
          <option value="#action/3.1">Select Series</option>
          <option value="#action/3.2">Another action</option>
        </select>
      </div>
      <div style={{paddingLeft:"790px"}}>
        <Button style={{ borderRadius: "20px" }} variant="primary">
          <AddIcon />
          Add
        </Button>
      </div>
    </div>
  );
}
