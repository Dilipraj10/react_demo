import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/slices/CartSlice";

export default function Product() {
  const [products] = React.useState([
    {
      name: "bat",
      price: 800,
    },
    {
      name: "ball",
      price: 60,
    },
    {
      name: "wickets",
      price: 600,
    },
    {
      name: "nee pads",
      price: 900,
    },
  ]);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Cart />
        <div style={{ height: "200px", display: "flex", gap: "10px" }}>
          {products.map((pro) => {
            return (
              <Card sx={{ maxWidth: 250, mt: 2 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h5>Name: {pro.name}</h5>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <h5>Price: {pro.price}</h5>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={e => {dispatch(addItems({name: pro.name, price: pro.price}))}} style={{ backgroundColor: "blue", color: "white" }}>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
