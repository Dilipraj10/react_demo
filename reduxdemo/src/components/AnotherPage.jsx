import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AnptherPage() {
  const state = useSelector((state) => state.gameDetails);
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/home");
  };

  const handleAdmin = () => {
    navigate("/addgames");
  };

  console.log("next page", state);
    
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "5px",
        }}
      >
        <h3>Welcome {name}</h3>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleAdmin}>Admin</Button>
      </div>
      <div>
        <div
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {state.data &&
            state.data.map((data, index) => (
              <Card
                key={index}
                sx={{ maxWidth: 220 }}
                style={{ marginBottom: "10px" }}
              >
                <CardMedia
                  component="img"
                  height="194"
                  image={data.gameImage}
                  alt="Game"
                />
                <CardHeader title={data.gameName} />
                <CardContent>
                  <Typography variant="body2" color="textSecondary">
                    DESCRIPTION: {data.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    GAME TYPE: {data.gameType}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button type="submit">Download</Button>
                </CardActions>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
