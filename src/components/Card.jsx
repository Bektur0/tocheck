import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard({ shoes, addToCart }) {
  return (
    <Card style={{ margin: "30px" }} sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image={shoes.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {shoes.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {shoes.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => addToCart(shoes.id)}
          size="small"
          color="primary"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
