/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import HomeLogo from '../HomeLogo';
import Word from '../Word';

import wordList from '../../data/wordList.json';

import { shuffleArray } from '../../utils/utils';

const GAME_STATE_START = 0;
const GAME_START_PLAYING = 1;

const App = () => {
  const [currentWord, setWord] = useState({ word: '', translation: '' });
  const [currentList, setCurrentList] = useState([]);
  const [gameState, setGameState] = useState(GAME_STATE_START);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const shuffledArray = shuffleArray(wordList.words);
    document.title = 'Pictionary'

    setCurrentList(shuffledArray);
  }, [wordList]);

  useEffect(() => {
    setWord(currentList[currentIndex]);
  }, [currentIndex, currentList]);
  

  const handleButton = () => {
    if (gameState === GAME_STATE_START) {
      setGameState(GAME_START_PLAYING)
    } else if (currentIndex === currentList.length - 1) {
      return;
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  
  return (
   <Grid 
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
      <Grid item xs={12}>
        <Typography variant="h1" component="div" style={{ color: 'white' }}>
          PICTIONARY
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {
          gameState === GAME_STATE_START ? 
          (<HomeLogo />)
          : (<Word word={currentWord.word} translate={currentWord.translate} />)
        }
      </Grid>
      <Grid item xs={12}>
        <Button 
          variant='contained' 
          color='secondary'
          onClick={handleButton}
        >
          {gameState === GAME_STATE_START ? 'Bắt Đầu' : `Từ tiếp theo (${currentIndex + 1}/${currentList.length})`}
        </Button>
      </Grid>
   </Grid>
  );
}

export default App;
