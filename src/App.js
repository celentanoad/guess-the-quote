import React, { useState } from 'react';
import './App.css';
import * as fakeQuotes from './data/fakeQuotes';
import * as realQuotes from './data/realQuotes';

function App() {
 const [realQuote, setRealQuote] = useState(null)
 const [fakeQuote, setFakeQuote] = useState(null)
 const [order, setOrder] = useState(0)

 const getQuotes = async () => {
   const real = await realQuotes.getRandomRealQuote();
   const fake = await fakeQuotes.getRandomFakeQuote();
   setRealQuote(real);
   setFakeQuote(fake);
   const num = Math.floor(Math.random() * 2)
   setOrder(num);
 }




  return (
    <div className="App">
      <header className="App-header">
        {order === 0 ?
        <>
        <button>{realQuote}</button>
        <button>{fakeQuote}</button>
        </>
        :
        <>
        <button>{fakeQuote}</button>
        <button>{realQuote}</button>
        </>
        }

        <button onClick={getQuotes}>Get New Quotes</button>
      </header>
    </div>
  );
}

export default App;
