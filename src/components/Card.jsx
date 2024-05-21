import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ shoe, addToCart }) {
  // console.log(shoe);
  return (
    <Card style={{ margin: "30px" }} sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image={shoe.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {shoe.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {shoe.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => addToCart(shoe.id)} size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
