import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SnakeCard({ setGameSelector, setHighScores }) {
  function handleMainClick(text) {
    setHighScores(JSON.parse(localStorage.getItem("snakeScores")));

    setGameSelector(text);
  }
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={() => handleMainClick("snake")}>
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
        <Button
          onClick={() => handleMainClick("snakeScores")}
          size="small"
          color="primary"
        >
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}
