import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SnakeCard({ setGameSelector }) {
  function handleMainClick() {
    console.log("SNAKKKKE CLICKED");
    setGameSelector("snake");
  }
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={() => handleMainClick()}>
        <CardMedia
          component="img"
          height="140"
          image="./imgs/SnakeScreenShot.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Snake
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Snake daddy's got to eat. But watch your tail and don't hit the
            edges.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}
