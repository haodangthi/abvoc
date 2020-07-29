/* eslint-disable react/jsx-filename-extension */
import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import WordCard from './WordCard';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const WordComponent = ({ words, onClick }) => {
  const classes = useStyles();
  const [allWords, setWords] = useState(
    words.map((word) => ({ isChecked: false, countTrained: 0, ...word })),
  );
  const [newPairInput, setNewPair] = useState('');
  const [currentWord, setWord] = useState(words[0]);

  const handleNewPairInput = (e) => {
    setNewPair(e.target.value);
    console.log(newPairInput);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handleNewPairInput}
      />
      <Button variant="contained" color="primary" onClick={ ()=>onClick(newPairInput)}>
        Create new pair
      </Button>
      {allWords.map((w) => (
        <WordCard state={w} key={w.id} />
      ))}
    </form>
  );
};

export default WordComponent;
