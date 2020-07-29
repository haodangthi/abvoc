/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ButtonComponent from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function DeckInput(props) {
  const classes = useStyles();
  
  const btn = {
    btnName: 'Add deck',
    onClick: props.onClick,
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={props.onChange} />
      <ButtonComponent btn={btn} />
    </form>
  );
}

export default DeckInput;
