import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';


function App() {
  const [image, setImages] = useState();
  const [word, setWord] = useState("");
  const [words, setWords] = useState([]);
  const [name, setName] = useState("");
  const [deck, setDeck] = useState();
  const [cardNo, setCardNo] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    if (words) {
      words.push(word)
      setWords(words);
    } else {
      setWords(word);
    }
    // clearing the values
    setWord("");
  }

  function saveDeck(e) {
    e.preventDefault();
    setDeck({
      name: name,
      cards: words
    });
    setName("");
  }

  function next() {
    if (deck) {
      if (cardNo < deck.cards.length) {
        setCardNo(cardNo + 1);
      } else {
        setCardNo(0);
      }
    }
  }

  function previous() {
    document.getElementById("card").classList.add("left");
    if (deck) {
      if (cardNo > 0) {
        setCardNo(cardNo - 1);
        document.getElementById("card").classList.remove("left");
        document.getElementById("card").classList.add("active");
      }
    }
  }

  function clearWords() {
    setWords([]);
    alert("You have cleared the words.");
  }

  function flipCard(e){
    e.preventDefault()
    console.info("I'm being flipped");
    const card = document.getElementById("card");
    console.info(card)
    card.classList.toggle("show-answer");
  }


  
  function showAddContainer(e) {
    e.preventDefault();  
    const cardsContainer = document.getElementById("overlay");
    cardsContainer.classList.add("show");
  }

  function hideAddContainer(e) {
    e.preventDefault();  
    const cardsContainer = document.getElementById("overlay");
    try {
      cardsContainer.classList.remove("show");
    } catch (error) {
      console.log(error);
    }
  }

  console.info(cardNo);

  return (
    <div className="App">
      <h1>Flash Cards</h1>
      <button className="btn" onClick={showAddContainer}>Add Cards</button>
      <div id="overlay" className="add-container">
        <button className="closebtn" onClick={hideAddContainer}>x</button>
        <form className="form-group">
          <label>Name of Deck</label>
          <input
            type="text"
            placeholder="Enter the name of your deck."
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          <button color="primary" type="submit" onClick={saveDeck}>
            Submit
          </button>
        </form>
        <form>
          <input
            type="text"
            placeholder="Enter words.."
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button color="primary" type="submit" onClick={handleSubmit}>
            Submit
          </button>

          <button color="primary" type="submit" onClick={clearWords}>
            Clear
          </button>

          <button color="primary" type="submit" onClick={saveDeck}>
            Save
          </button>
        </form>
        <div className="words-display">
          {deck && 
            <div>
              <p>Name</p>
              <h1>{deck.name}</h1>
              <h2>Cards</h2>
                {deck.cards.map((card, i) => (
                  <h4 key={i}>{card}</h4>
                ))}
            </div>
          }
          {!deck && words &&
            <div className="wordbox">
              <h2>Cards</h2>
              {words.map((word, i) => (
                <h4 key={i}>{word}</h4>
                ))
              }
            </div>
          }
        </div>
      </div>
      <div className="cards">
        {deck ?
          <div id="card" className="card" onClick={flipCard} style={{ cursor:"pointer" }} show-answer>
            <h1>Deck Name: {deck.name}</h1>
            <h3>Active Card:</h3>
            <div className="inner-card">
              <CardBody className="inner-card-front">
                <CardTitle tag="h1">{deck.cards[cardNo]}</CardTitle>
              </CardBody>
              <CardBody className="inner-card-back">
                <CardTitle tag="h1">{deck.cards[cardNo]}</CardTitle>
              </CardBody>
              {image && 
                <img width="100%" src="/assets/" alt="Card image cap" />
              }
            </div>
          </div> :
          <div className="card" onClick={flipCard} style={{ cursor:"pointer" }}>
            <body className="inner-card-front">
              <h1>Test Card</h1>
            </body>
            <img src="/assets/image-hint" alt="Image hint" style={{width:"100%"}} />
            <body>
              <p>Lorem ipsum</p>
            </body>
          </div>
        }
      </div>
      <button color="primary" onClick={previous}>Prev</button>
      <button color="primary" onClick={next}>Next</button>
    </div>
  );
}

export default App;
