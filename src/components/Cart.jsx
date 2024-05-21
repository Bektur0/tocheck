import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MediaCard({ soldShoes, removeFromCart }) {
  return (
    <Card style={{ margin: "30px" }} sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="90"
          image={soldShoes.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {soldShoes.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {soldShoes.price}
          </Typography>
          <Typography variant="h5" color="text.primary">
            quantity:1
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => removeFromCart(soldShoes.id)}
          size="small"
          color="primary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
