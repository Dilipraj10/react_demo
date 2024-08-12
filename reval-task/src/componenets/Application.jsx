import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Application({data}) {
    
    const [applicationData, setApplicationData] = useState([])
    useEffect(() => {

        const getApplication = async () => {
            try{
                const response = await axios.get(
                    `https://pegcon.gateway.dev.pearsoncmg.com/v1/Questions/${data}`
                );
                const newData = response.data
                setApplicationData(newData);
                console.log("newData", response.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getApplication()

    },[data])

  return (
    <div style={{display:"flex", paddingLeft: "30px", paddingRight:"30px", gap:"50%"}}>
      <div >
        <h6>Application</h6>
        <div
          style={{ paddingTop: "2px", fontSize: "18px" }}
          className="ml-auto"
        >
          <select className="dropdown-select" aria-label="User Options">
            <option value="#action/3.1">Select Appliction</option>
            <option value="#action/3.2">value</option>;
          </select>
        </div>
      </div>
      <div>
        <h6>Chapter</h6>
        <div
          style={{ paddingTop: "2px", fontSize: "18px" }}
          className="ml-auto"
        >
          <select className="dropdown-select" aria-label="User Options">
            <option value="#action/3.1">Select Chapter</option>
            <option value="#action/3.2">value</option>;
          </select>
        </div>
      </div>
    </div>
  );
}
