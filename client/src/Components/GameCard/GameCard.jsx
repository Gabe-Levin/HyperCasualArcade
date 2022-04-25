import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./GameCard.css";

export default function GameCard({ setWindowSelector, setHighScores, card }) {
  function handleMainClick(text) {
    console.log("gameCard", setWindowSelector);
    setHighScores(JSON.parse(localStorage.getItem(card.scorePath)));
    setWindowSelector(text);
  }
  return (
    <Card className="Cards">
      <CardActionArea onClick={() => handleMainClick(card.game)}>
        <CardMedia
          component="img"
          height="140"
          image={card.imageSrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className="Cards"
            gutterBottom
            variant="h5"
            component="div"
          >
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
