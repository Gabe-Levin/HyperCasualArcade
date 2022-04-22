import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./PongCard.css";

export default function PongCard({ setGameSelector }) {
  function handleMainClick(text) {
    setGameSelector(text);
  }
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={() => handleMainClick("pong")}>
        <CardMedia
          component="img"
          height="140"
          image="./imgs/PongScreenShot.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pong
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Disco Pong for the Geezers. Try to get the hightest lead on your
            opponent.
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
