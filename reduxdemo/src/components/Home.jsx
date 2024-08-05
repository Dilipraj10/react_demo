import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { gameDetails } from "../redux/Slices/HomeSlice";
import { downloadGame } from "../redux/Slices/DowloadSlice";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from '@mui/material/CardActions';

export default function Home() {
  const name = localStorage.getItem("name");
  const gmail = localStorage.getItem("gmail");
  const state = useSelector((state) => state.gameDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleNext = () => {
    navigate("/next")
  }

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    dispatch(gameDetails())
  };

  const handleDownload = (gameName) => {
    let downloadRequirments = {
      gmail,
      gameName
    }
    const res = dispatch(downloadGame(downloadRequirments))
    if(res){
      alert("downloaded")
    }
    else{
      alert("unable to download")
    }
  }

  return (
    <>
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
          <Button onClick={handleClick} variant="primary" type="submit">
            Logout
          </Button>
          <Button onClick={handleNext} variant="primary" type="submit">
            next
          </Button>
        </div>
        <div
          style={{
            marginLeft:"30px",
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
                  <Button onClick={() => {handleDownload(data.gameName)}} type="submit">Download</Button>
                </CardActions>
              </Card>
            ))}
        </div>
      </div>
    </>
  );
}
