import React from 'react';

function WordsList({ data }) {
  console.log(data);
  return (
    <div>
         <h1>Words list page</h1>
      {data.map((word) => (<li key={word.id}>{word.text}</li>))}
      
       

       
    </div>
  );
}

export default WordsList;
