import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function SnakeCard({ setGameSelector, setHighScores, card }) {
  function handleMainClick(text) {
    setHighScores(JSON.parse(localStorage.getItem(card.scorePath)));
    setGameSelector(text);
  }
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardActionArea onClick={() => handleMainClick(card.game)}>
        <CardMedia
          component="img"
          height="140"
          image={card.imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.gameTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.gameDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => handleMainClick(card.scorePath)}
          size="small"
          color="primary"
        >
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}
