import React, { useState } from 'react';
import WordsList from './WordList';
import WordComponent from './Word';
import SimpleCard from './WordCard';

const words = [{
  id: 1,
  text: 'мама',
  translation: 'mom',
},
{
  id: 2,
  text: 'папа',
  translation: 'dad',
},
{
  id: 3,
  text: 'сестра',
  translation: 'sister',
}];



const DeckPage = (props) => {
  const [allWords, setAllwords] = useState(words);
  const { params } = props.match;
  
  const addNewPair = (newPairInput) => {
    console.log(newPairInput);
    const pair = {
      id: allWords.length, text: newPairInput, translation: newPairInput,
    };
    setAllwords([...allWords, pair],(allWords)=>console.log(allWords));
  
  };
  

  // return (!article) ? <NotFoundPage /> :
  return (
    <>
    
    <div className="simCard">
        {/* {WordComponent(SimpleCard, allWords, setAllwords)} */}
        <WordComponent words={allWords} onClick={addNewPair}></WordComponent>
        
      </div>

 
      
    </>
  );
};
export default DeckPage;
