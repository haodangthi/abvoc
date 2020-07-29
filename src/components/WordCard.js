import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function WordCard(props) {
  const classes = useStyles();
  const wordState = props.state;
  const [usersInput, setInput] = useState('');
  const [trained, setTrained] = useState(0);
  const [isLearned, setLearned] = useState(false);
  const [started, setStarted] = useState(false);

  console.log(wordState);
  const checkWord = () => {
    const isCorrect = wordState.translation.toUpperCase().trim() === usersInput.toUpperCase().trim();
    console.log(isCorrect);
    if (trained + 1 >= 4) { setLearned(true); }
    setStarted(false);

    return isCorrect ? setTrained(trained + 1) : false;
  };
  const handleInputChange = useCallback(
    (e) => {
      setInput(e.target.value);
      console.log(usersInput);
    },
    [usersInput],
  );
  const startTraining = () => setStarted(true);

  return (
    <Card className={classes.root}>

      {(started) ? (
        <>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={checkWord}>
            Check
          </Button>
        </>
      ) : null}

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Trained:
          {' '}
          {trained}
        </Typography>
        <Typography variant="h5" component="h2">
          {wordState.text}
        </Typography>

        <Typography variant="body2" component="p">
          Translation:
          <br />
          {(isLearned) ? wordState.translation : null}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={startTraining}>Train</Button>
      </CardActions>
    </Card>
  );
}
