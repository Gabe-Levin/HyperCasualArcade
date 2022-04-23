import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SnakeCard({ setGameSelector, setHighScores }) {
  function handleMainClick(text) {
    setHighScores(JSON.parse(localStorage.getItem("flappyBirdScores")));
    setGameSelector(text);
  }
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={() => handleMainClick("flappyBird")}>
        <CardMedia
          component="img"
          height="140"
          image="./imgs/FlappyBirdScreenShot.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Flappy Bird
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Flying to your hearts desire, just don't hit the pipes...no pun
            intended
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleMainClick("flappyBirdScores")}
          size="small"
          color="primary"
        >
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}
