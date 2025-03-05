import React, { useState } from 'react';
import { useSlider } from './SliderContext';
import cardData from '../data/cards.json';
import Slider from './slider';
import Card from './card';
import RandomizeSliderButton from './random';

const Board: React.FC = () => {
  const { value } = useSlider();
  const [card, setCard] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [playing1, setPlaying1] = useState<boolean>(false);
  const [playing2, setPlaying2] = useState<boolean>(false);
  const [sliderValueP1, setSliderValueP1] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [round, setRound] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  const drawCard = () => {
    const randomCard = cardData.cards[Math.floor(Math.random() * cardData.cards.length)];
    setCard(randomCard);
    setActive(true);
    setPlaying1(true);
	setRound(true);
  }

  const confirmGuessP1 = () => {
    setSliderValueP1(value);
    setPlaying1(false);
    setPlaying2(true);
  }

  const confirmGuessP2 = () => {
    const sliderValueP2 = value;
    setPlaying2(false);
    if (sliderValueP1 === sliderValueP2) {
      setScore(prevScore => prevScore + 10);
	  setMessage("Bang on! 10 points added.");
	  alert("Bang on! Yippee!");
    } else if (Math.abs(sliderValueP1 - sliderValueP2) < 3) {
      setScore(prevScore => prevScore + 5);
	  setMessage("Close! 5 points added.");
    } else if (Math.abs(sliderValueP1 - sliderValueP2) < 7) {
      setScore(prevScore => prevScore + 3);
	  setMessage("Well done! 3 points added.");
    } else if (Math.abs(sliderValueP1 - sliderValueP2) < 10) {
      setScore(prevScore => prevScore + 1);
	  setMessage("Solid. 1 point added.");
    } else {
      setScore(prevScore => prevScore + 0);
	  setMessage("Not close enough - no points added.");
    }
	setRound(false);
  }

  const endGame = () => {
	setScore(0);
    setActive(false);
	setRound(false);
	//add logic to write highscores to DB here
  }

  const newRound = () => {
	setRound(true);
	drawCard();
  }

  const [leftValue, rightValue] = card ? card.split('-') : ['',''];

  return (
    <div>
      {((active && playing1) || !round) && (
        <Slider enabled={false} reset={false}/>
      )}
      {(active && playing2) && (
        <Slider enabled={true} reset={true}/>
      )}
	  {!round && (
		<div>
			<h1 className="font-serif text-center">Player 1 Level: {sliderValueP1}</h1>
			<h1 className="font-serif text-center">Player 2 Level: {value}</h1>
			<h1 className="font-serif text-center">{message}</h1>
		</div>
      )}
      <div className="mt-6 text-center overflow-hidden w-[30%] ml-[35%]">
        {(active && playing1) && (
          <div>
            <RandomizeSliderButton />
            <button 
              onClick={confirmGuessP1} 
              className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
            >Confirm</button>
          </div>
        )}
        {(active && playing2) && (
          <button 
            onClick={confirmGuessP2} 
            className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
          >Confirm</button>
        )}
        {!active && (
          <button 
            onClick={drawCard} 
            className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
          >Start Game</button>
        )}
        {active && (
          <button 
            onClick={endGame} 
            className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
          >End Game</button>
        )}
		{!round && (
			<button 
            onClick={newRound} 
            className="m-4 border-2 border-slate-500 bg-gray-100 hover:bg-gray-300 font-serif py-2 px-4 rounded-xl"
          >New Round</button>
		)}
      </div>
      
      {(card && active) && (
        <Card leftValue={leftValue} rightValue={rightValue} />
      )}
      {active && (
		<h1 className="font-serif">Score: {score}</h1>
	  )}
    </div>
  );
};

export default Board;