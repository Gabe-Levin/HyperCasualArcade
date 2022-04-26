import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import "./GameCard.css";
import "./Button.css";

export default function GameCard({ setWindowSelector, setHighScores, card }) {
  function handleViewSwitch(text) {
    //Update scores state to selected game
    setHighScores(JSON.parse(localStorage.getItem(card.scorePath)));
    //change the game window
    setWindowSelector(text);
  }

  return (
    <Card className="Cards" sx={{ border: 0, borderColor: "secondary.main" }}>
      <CardActionArea onClick={() => handleViewSwitch(card.game)}>
        <CardMedia
          component="img"
          height="140"
          image={card.imageSrc}
          alt={card.gameTitle}
        />
        <CardContent>
          <Typography
            className="Cards"
            gutterBottom
            variant="h5"
            component="div"
            margin="0"
            padding="0"
          >
            {card.gameTitle}
          </Typography>
          <Typography
            variant="body2"
            padding="0"
            margin="0"
            color="text.secondary"
          >
            {card.gameDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="hr" sx={{ textAlign: "center" }} padding="0">
        <Button
          className="eightbit-btn eightbit-btn--reset"
          onClick={() => handleViewSwitch(card.scorePath)}
          size="small"
          color="primary"
          padding="10px"
        >
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}

const SpecialHeader = styled.h1`
  font-size: 5rem;
`;
