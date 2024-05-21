import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MediaCard({ shoe, removeFromCart }) {
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
          <Typography variant="h5" color="text.primary">
            Qty: {shoe.qty}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => removeFromCart(shoe.id)}
          size="small"
          color="primary"
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}
