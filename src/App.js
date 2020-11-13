import React, { useEffect, useState } from 'react';
import './App.css';
import * as fakeQuotes from './data/fakeQuotes';
import * as realQuotes from './data/realQuotes';
import { connect } from 'react-redux';
import image0 from './images/logo512.png';
import image1 from './images/face1.png';
import image2 from './images/face2.png';
import image3 from './images/face3.png';
import image4 from './images/face4.png';
import image5 from './images/face5.png';

const images = [image0, image1, image2, image3, image4, image5]

function App(props) {

 const [realQuote, setRealQuote] = useState(null)
 const [fakeQuote, setFakeQuote] = useState(null)
 const [order, setOrder] = useState(0)
 const [image, setImage] = useState(null)

 const getQuotes = async () => {
   props.setMessage(null);
   setImage(null);
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
  if (e.target.textContent === realQuote) {
    getImageNumber()
    props.setMessage("You got it right!");
  } else {
    props.setMessage("Nope, that quote is fake!");
  }
 }

 const getImageNumber = () => {
   setImage(images[Math.floor(Math.random() * 6)]);
 }

  return (
    <div className="App">
    <h1>Did he <i>really</i> say that?</h1>
    <h2>Click on the quote you think is real!</h2>
      <header className="App-header">
        {props.message ? 
          <>
            <h3>{props.message}</h3>
            {image ?
            <img src={image} alt="trump face" />
            :
            <></>
            }
          </>
          :
        order === 0 ?
        <div className="buttons">
          <div className="quote" onClick={(e) => handleGuess(e)}>{realQuote}</div>
          <div className="quote" onClick={(e) => handleGuess(e)}>{fakeQuote}</div>
        </div>
        :
        <div className="buttons">
           <div className="quote" onClick={(e) => handleGuess(e)}>{fakeQuote}</div>
           <div className="quote" onClick={(e) => handleGuess(e)}>{realQuote}</div>
        </div>
        
      }
        <button className="new" onClick={getQuotes}>Get New Quotes</button>
      </header>
    </div>
  );
}

function mapStateToProps(state){
  return {
    message: state.message
  }
}

function mapDispatchToProps(dispatch){
  return {
    setMessage: (message) => {
      dispatch({type: "SET_MESSAGE", payload: message})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
