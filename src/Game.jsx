import React from 'react';
import ReactPlayer from 'react-player';
// import image0 from './images/logo512.png';
// import image1 from './images/face1.png';
// import image2 from './images/face2.png';
// import image3 from './images/face3.png';
// import image4 from './images/face4.png';
// import image5 from './images/face5.png';

// const images = [image0, image1, image2, image3, image4, image5]


const Game = (props) => {
    return ( 
        <header className="App-header">
        {props.message ? 
          <>
            <h3>{props.message}</h3>
            {props.image ?
            <img src={props.image} alt="trump face" />
            :
            <></>
            }
          </>
          :
        props.order === 0 ?
        <div className="buttons">
          <div className="quote" onClick={(e) => props.handleGuess(e)}>{props.realQuote}</div>
          <div className="quote" onClick={(e) => props.handleGuess(e)}>{props.fakeQuote}</div>
        </div>
        :
        <div className="buttons">
           <div className="quote" onClick={(e) => props.handleGuess(e)}>{props.fakeQuote}</div>
           <div className="quote" onClick={(e) => props.handleGuess(e)}>{props.realQuote}</div>
        </div>
      }
      {props.image ? 
      <div>
        <hr></hr>
        <ReactPlayer width="400px" url="https://www.youtube.com/watch?v=Zph7YXfjMhg" playing={true}/>
      </div>
        :
        <></>
    }
        <button className="new" onClick={props.getQuotes}>Get New Quotes</button>
      </header>
     );
}
 
export default Game;