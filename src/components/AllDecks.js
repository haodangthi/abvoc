import React, { useState } from 'react';
import DeckUi from './DeckUi';
import DeckInput from './CreateDeck';

const deck1 = {
  id: 0,
  deckName: 'Family',
  records: [],
  learnedWordsNumber: 0,
};
const deck2 = {
  id: 1,
  deckName: 'School',
  records: [],
  learnedWordsNumber: 0,
};

const AllDecks = () => {
  const [decks, setDecks] = useState([deck1, deck2]);
  const [newDeck, setNewDeck] = useState({
    records: [],
    deckName: '',
    learnedWordsNumber: 0,
  });
  const handleDeckInput = (e) => {
    setNewDeck({
      ...newDeck,
      deckName: e.target.value,
      id:decks.length
    });

    console.log(newDeck);
  };
  const addNewDeck = () => {
    setDecks([...decks, newDeck]);
    console.log(decks);
  };
  const goToDeck = (id) => {
    const deckId = id;
    return () => {
      
      window.open(`/deck/${id}`);
    };
  };

  return (
    <>
      <h1>All decks</h1>
      <DeckInput onChange={handleDeckInput} onClick={addNewDeck} />
      {decks.map((deck, index) => <DeckUi data={deck} key={index} practice={goToDeck} />)}
    </>
  );
};

export default AllDecks;
