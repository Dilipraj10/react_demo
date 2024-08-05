 import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function DeleteAxios() {

    const [storedData, setstoredData] = useState([]);
  
    //Getting all the data from the json file when the component gets mounted using axios get.
      useEffect(() => {
        axios
          .get("http://localhost:4000/data/")
          .then((res) => {
            setstoredData(res.data);
          })
        //   .catch((err) => {
        //     alert("Something Went Wrong");
        //   });
      }, []);
      const handleDelete = (id) => {
        axios
          .delete("http://localhost:4000/data/" + id)
          .then((res) => {
            alert("The ID :" + id + " is deleted");
          })
          .catch((err) => {
            alert("Data not deleted");
          });
      };
      return (
        <div
          style={{ backgroundColor: "white", opacity: "0.95", marginTop: "50px" }}
        >
     {storedData.map((details) => {
        return (
          <div style={{ padding: "5px", borderRadius: "10px" }}
                key={details.id}>
                <h4 style={{
                    backgroundColor: "blueviolet",
                    color: "white",
                    borderRadius: "15px",
                    padding: "5px",
                  }} >Id : {details.id}</h4>
                <p>Person Name : {details.personNm}</p>
                <p>Place : {details.place}</p>
                <p>Department Name : {details.department}</p>
                <button onClick={() => {handleDelete(details.id);}}
                  style={{ padding: "10px", borderRadius: "5px", fontSize: "11px" }}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      );
}
