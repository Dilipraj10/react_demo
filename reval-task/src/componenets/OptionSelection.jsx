import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Application from "./Application";

export default function OptionSelection() {
  const [token, setToken] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenResponse = await axios.post(
          "https://pegcon.gateway.dev.pearsoncmg.com/v1/auth/token?tenantName=IT&userId=0"
        );
        const token = tokenResponse.data;
        setToken(token);

        const dataResponse = await axios.get(
          "https://pegcon.gateway.dev.pearsoncmg.com/v1/Questions/100000",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setOptions(dataResponse.data); 
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <>
      <div
        style={{ display: "flex", paddingLeft: "30px"}}
      >
        <div>
          <h4>Select Content</h4>
        </div>
        <div
          style={{ paddingLeft: "30px", paddingTop: "2px", fontSize: "20px" }}
          className="ml-auto"
        >
          <select
            className="dropdown-select"
            aria-label="User Options"
            onChange={handleSelectChange} 
          >
            <option value="">Select Series</option>
            {options.map((option) => (
              <option key={option.attr.id} value={option.attr.id}>
                {option.data}
              </option>
            ))}
          </select>
        </div>
        <div style={{ paddingLeft: "490px" }}>
          <Button style={{ borderRadius: "20px" }} variant="primary">
            <AddIcon />
            Add
          </Button>
        </div>
      </div>
      <Application data={selectedId} />
    </>
  );
}
