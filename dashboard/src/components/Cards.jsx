import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Dropdown from "react-bootstrap/Dropdown";

export default function BasicCard() {
  const cal =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fcalculator-logo_33616406.htm&psig=AOvVaw2mB4GM7Od1M2Q8B0WzQyp6&ust=1719395413505000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCKCN55q99oYDFQAAAAAdAAAAABAE";
  const eng =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2Fabc-free-icons-designed-by-good-ware--617133955175294008%2F&psig=AOvVaw2vSt1KBvhUujpGGnUgy7ly&ust=1719395586672000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLCNi-u99oYDFQAAAAAdAAAAABAE";
  const soci =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fvector-flat-learning-people-concept-conceptual-1715654905&psig=AOvVaw3Ii_XyoRAthheEkNS8qK62&ust=1719395826588000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjY696-9oYDFQAAAAAdAAAAABAE";
  const scie = "https://cdn-icons-png.flaticon.com/512/6554/6554176.png";

  const [datas, setData] = useState([
    { image: eng, subject: "English", des: "English is a very good language" },
    { image: cal, subject: "Maths", des: "Maths is a very good subject" },
    { image: soci, subject: "Social", des: "Social studies are interesting" },
    {
      image: scie,
      subject: "Science",
      des: "Science helps us understand the world",
    },
  ]);

  return (
    <>
      <Box>
        <Dropdown className="mt-2 ml-2">
          <Dropdown.Toggle
            id="dropdown-basic"
            style={{ backgroundColor: "white", color: "black", border: "none" }}
          >
            Class VI
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          flexWrap: "wrap",
          mt: 1,
        }}
      >
        {datas.map((data, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 230,
              maxWidth: 230,
              marginBottom: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 310,
              maxHeight: 310,
            }}
          >
            <img
              src={data.image}
              alt={data.subject}
              style={{
                width: "30%",
                height: 100,
                objectFit: "cover",
                marginLeft: "20px",
                marginTop: "50px",
              }}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>
                {data.subject}
              </Typography>
              <Typography variant="body2">{data.des}</Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 1,
              }}
            >
              <Fab color="lightgrey" aria-label="more">
                <MoreHorizOutlinedIcon />
              </Fab>
              <Fab color="lightgrey" aria-label="arrow">
                <ArrowForwardOutlinedIcon />
              </Fab>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}
