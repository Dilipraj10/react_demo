import React from "react";
import OptionSelection from "./OptionSelection";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

export default function AngularTest() {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <div>
          <h3>Angular test--new</h3>
        </div>
        <div
          style={{
            marginTop: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Card>
            <OptionSelection />
            <Divider />
          </Card>
        </div>
      </div>
    </>
  );
}
