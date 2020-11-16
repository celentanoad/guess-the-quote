import React, { useEffect, useState } from 'react';
import './App.css';
import * as fakeQuotes from './data/fakeQuotes';
import * as realQuotes from './data/realQuotes';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import image0 from './images/logo512.png';
import image1 from './images/face1.png';
import image2 from './images/face2.png';
import image3 from './images/face3.png';
import image4 from './images/face4.png';
import image5 from './images/face5.png';
import Game from './Game';

const images = [image0, image1, image2, image3, image4, image5]

function App(props) {

//  const [realQuote, setRealQuote] = useState(null)
//  const [fakeQuote, setFakeQuote] = useState(null)
//  const [order, setOrder] = useState(0)
//  const [image, setImage] = useState(null)

 const getQuotes = async () => {
   props.setMessage(null);
   props.setImage(null);
   const real = await realQuotes.getRandomRealQuote();
   const fake = await fakeQuotes.getRandomFakeQuote();
   props.setRealQuote(real);
   props.setFakeQuote(fake);
   const num = Math.floor(Math.random() * 2)
   props.setOrder(num);
 }

 useEffect(() => {
   getQuotes()
 }, []);

 const handleGuess = (e) => {
  if (e.target.textContent === props.realQuote) {
    getImageNumber()
    props.setMessage("You got it right!");
  } else {
    props.setMessage("Nope, that quote is fake!");
  }
 }

 const getImageNumber = () => {
   props.setImage(images[Math.floor(Math.random() * 6)]);
 }

  return (
    <div className="App">
    <h1>Did he <i>really</i> say that?</h1>
    <h2>Click on the quote you think is real!</h2>
    <Game 
      getQuotes={getQuotes}
      handleGuess={handleGuess}
      getImageNumber={getImageNumber}
    />
      {/* <header className="App-header">
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
        props.order === 0 ?
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
      {image ? 
      <div>
        <hr></hr>
        <ReactPlayer width="400px" url="https://www.youtube.com/watch?v=Zph7YXfjMhg" playing={true}/>
      </div>
        :
        <></>
    }
        <button className="new" onClick={getQuotes}>Get New Quotes</button>
      </header> */}
      <footer>
        <p>Made with &hearts; by Alanna Celentano</p>
        <p>View the source code at <a href="https://github.com/celentanoad/guess-the-quote">https://github.com/celentanoad/guess-the-quote</a></p>
      </footer>
    </div>
  );
}

function mapStateToProps(state){
  return {
    message: state.message,
    order: state.order,
    image: state.image,
    realQuote: state.realQuote,
    fakeQuote: state.fakeQuote
  }
}

function mapDispatchToProps(dispatch){
  return {
    setMessage: (message) => {
      dispatch({type: "SET_MESSAGE", payload: message})
    },
    setOrder: (order) => {
      dispatch({type: "SET_ORDER", payload: order})
    },
    setImage: (image) => {
      dispatch({type: "SET_IMAGE", payload: image})
    },
    setRealQuote: (quote) => {
      dispatch({type: "SET_REAL_QUOTE", payload: quote})
    },
    setFakeQuote: (quote) => {
      dispatch({type: "SET_FAKE_QUOTE", payload: quote})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
