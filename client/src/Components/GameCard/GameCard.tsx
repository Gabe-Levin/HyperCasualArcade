import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import styled from "@emotion/styled";
import "./GameCard.css";
import "./Button.css";
import { ICard } from "../../interfaces/card.interfaces";

interface GameCardProps {
  setWindowSelector: React.Dispatch<React.SetStateAction<string>>, 
  setHighScores: React.Dispatch<React.SetStateAction<number[]>>, 
  card: ICard
}

export default function GameCard({ setWindowSelector, setHighScores, card }: GameCardProps) {
  function handleViewSwitch(text: string) {
    //Update scores state to selected game
    let scorePath = localStorage.getItem(card.scorePath) ? (JSON.parse(localStorage.getItem(card.scorePath) || "")) : []
    setHighScores(scorePath); //create utility
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
      <CardActions className="hr" sx={{ textAlign: "center" , padding:"0"}} >
        <Button
          className="eightbit-btn eightbit-btn--reset"
          onClick={() => handleViewSwitch(card.scorePath)}
          sx= {{padding:"10px"}}
          size="small"
          color="primary"
        >
          High Scores
        </Button>
      </CardActions>
    </Card>
  );
}
