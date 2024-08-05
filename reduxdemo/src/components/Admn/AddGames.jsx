import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { TextField, Typography } from "@mui/material";
import { Container, TableContainer, Paper } from "@mui/material";
import { addGame } from "../../redux/Slices/AddGameSlice";
import { gameDetails } from "../../redux/Slices/HomeSlice";

export default function AddGames() {
  const [gameId, setGameId] = useState("");
  const [gameName, setGameName] = useState("");
  const [gameImage, setGameImage] = useState("");
  const [description, setGameDescription] = useState("");
  const [gameType, setGameType] = useState("");
  const [totalDownloads, setTotalDownloads] = useState("");

  const games = useSelector((state) => state.gameDetails?.data || []);
  console.log("games before change", games);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameDetails());
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const gameData = {
      gameId,
      gameName,
      gameImage,
      description,
      gameType,
      totalDownloads,
    };

    dispatch(addGame(gameData));
    console.log("Games after add: ", games);
    dispatch(gameDetails());
  };

  const Type = ["PC GAME", "MOBILE"];

  return (
    <>
      <Container
        maxWidth="xl"
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#F0EBE3",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h2" align="center" gutterBottom>
            WELCOME ADMIN
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              backgroundColor: "#F0EBE3",
              marginBottom: "10px",
            }}
          >
            <TextField
              label="Game ID"
              value={gameId}
              onChange={(e) => setGameId(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Game Name"
              value={gameName}
              onChange={(e) => setGameName(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Game Image"
              value={gameImage}
              onChange={(e) => setGameImage(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Description"
              value={description}
              onChange={(e) => setGameDescription(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              label="Total Downloads"
              value={totalDownloads}
              onChange={(e) => setTotalDownloads(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
            />
            <TextField
              select
              label=""
              value={gameType}
              onChange={(e) => setGameType(e.target.value)}
              style={{ width: "200px", margin: "10px" }}
              SelectProps={{ native: true }}
            >
              <option value="">Select Game Type</option>
              {Type.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </TextField>
          </div>
          <Button onClick={handleAdd} variant="primary" style={{ width: "100%", margin: "20px 0" }}>
            Add
          </Button>
        </div>
        <div
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#F0EBE3",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "scroll",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Game List
          </Typography>
          <div style={{ height: "300px", overflowY: "scroll", width: "100%" }}>
            <TableContainer component={Paper}>
              <div
                style={{ maxWidth: "100%", overflowX: "auto", height: "300px" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell style={{ width: "8%", height: "20px" }}>
                        Game ID
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Game Name
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Game Image URL
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Description
                      </TableCell>
                      <TableCell style={{ width: "15%", height: "20px" }}>
                        Games Type
                      </TableCell>
                      <TableCell style={{ width: "5%", height: "20px" }}>
                        Total downloads
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {games.length > 0 ? (
                      games.map((game) => (
                        <TableRow
                          key={game.gameId}
                          style={{ height: "40px", backgroundColor: "#F6F5F2" }}
                        >
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameId}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameName}
                          </TableCell>
                          <TableCell
                            style={{
                              fontSize: "0.8rem",
                              maxWidth: "100px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {game.gameImage}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.description}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.gameType}
                          </TableCell>
                          <TableCell style={{ fontSize: "0.8rem" }}>
                            {game.totalDownloads}
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={10}>No Game available</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </TableContainer>
          </div>
        </div>
      </Container>
    </>
  );
}
