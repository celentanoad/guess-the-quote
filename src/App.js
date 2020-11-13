import React, { useEffect, useState } from 'react';
import './App.css';
import * as fakeQuotes from './data/fakeQuotes';
import * as realQuotes from './data/realQuotes';

function App() {
 const [realQuote, setRealQuote] = useState(null)
 const [fakeQuote, setFakeQuote] = useState(null)
 const [order, setOrder] = useState(0)
 const [message, setMessage] = useState(null)

 const getQuotes = async () => {
   setMessage(null)
   const real = await realQuotes.getRandomRealQuote();
   const fake = await fakeQuotes.getRandomFakeQuote();
   setRealQuote(real);
   setFakeQuote(fake);
   const num = Math.floor(Math.random() * 2)
   setOrder(num);
 }

 useEffect(() => {
   getQuotes()
 }, []);

 const handleGuess = (e) => {
   console.log(e)
  if (e.target.textContent === realQuote) {
    setMessage("You got it right!");
  } else {
    setMessage("Nope, that quote is fake!");
  }
 }

  return (
    <div className="App">
    <h1>Did he <i>really</i> say that?</h1>
    <h2>Click on the quote you think is real!</h2>
      <header className="App-header">
        {message ? 
          <h3>{message}</h3>
          :
        order === 0 ?
        <div className="buttons">
          <button onClick={(e) => handleGuess(e)}>
           <div className="quote">{realQuote}</div>
          </button>
          <button onClick={(e) => handleGuess(e)}>
           <div className="quote">{fakeQuote}</div>
          </button>
        </div>
        :
        <div className="buttons">
           <button onClick={(e) => handleGuess(e)}>
           <div className="quote">{fakeQuote}</div>
          </button>
          <button onClick={(e) => handleGuess(e)}>
           <div className="quote">{realQuote}</div>
          </button>
        </div>
        
      }
        <button className="new" onClick={getQuotes}>Get New Quotes</button>
      </header>
    </div>
  );
}

export default App;
