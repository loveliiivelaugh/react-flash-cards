import React from 'react'
import SpeechRecognition from './SpeechRecognition'

const MainFlash = () => {
  const scoreCard = 0
  const msgEl = "Hello"
  let words = [];
  const myStorage = window.localStorage;
  
  let index = 0;
  let score = 0;

  function setDeck(e) {
    e.preventDefault();
    const deckName = document.getElementById('deck-name').value;

    console.log("Local Storage Activity:");
    myStorage.setItem('deck', JSON.stringify({"deckName": deckName}));
    console.log(myStorage);
    const currentDeck = myStorage.getItem('deck');
    console.info(currentDeck);
  }

  const addWord = ('submit', e =>  {
    e.preventDefault();
    let newWord = document.getElementById('add-word').value.trim();
    console.log("Amount of words in set before adding new word: " + words.length)
    console.log(newWord)
    words.push(newWord);
    
    console.log("Amount of words in set after adding new word: " + words.length)
    console.log(words)
    
    showCards();
  });

  // Check msg against word
  function checkWord(msg) {
    const word = +msg;
    console.log("words.index: " + words[index]);
    console.log("Spoken msg: " + msg);
    scoreCard.innerHTML += `<h4>Total Correct: ${score}</h4>`;
    // Check to see if spoken word matches card word
    if(word.valueOf() === words[index].valueOf()) {
      // if the spoken word does match the word displayed on the card then do the following
      // Add 1 to the score variable
      score++;
      // add a message to the UI/client 
      msgEl.innerHTML += `<div>Good Job!</h4>`;
      // add 1 to the index variable 
      index++;
      // other wise if the words dont match do the following
    } else {
      // add a message to the UI/client
      msgEl.innerHTML += `<div>Sorry that is not the right answer, try again.</div>`;
    }
  }

  function showCards() {
    const wordsWindow = document.getElementById('cards-set');
    wordsWindow.innerHTML = `
    ${words.map(word =>
      `<p>${word}</p>`
      )
    }`;
  }

  function handleNextClick() {
    if(words.length === 0 || words === null || words === 'undefined') {
      alert('Please add cards to deck.')
    } else {
      const card = document.getElementById('card');
        index++;
        if(index >= words.length) {
          index = 0;
        }
        card.innerHTML = `
          <div class="inner-card">
            <div class="inner-card-front">
              <h1>
                ${words[index]}
              </h1>
            </div>
          </div>
        `;
    }
    
    console.log(index + " " + words[index]);
  }

  function clearCards() {
    localStorage.clear();
    console.log(myStorage)
  }

  function deleteWord() {

  }
  
  function showAddContainer() {  
    document.getElementById("overlay").style.width = "100%";
  }

  function hideAddContainer(){
      try {
        console.log('The x button has been clicked')
        document.getElementById("overlay").style.width = "0%";
      } catch (error) {
        console.log(error);
      }
    }
      return (
          <div className="container">
            <button id="clear" className="clear-btn" onClick={clearCards}>
              <i className="fas fa-trash"></i> Clear Cards
            </button>
          
          <div className="score-card">
            <select name="" id="" disabled="disabled"></select>
            <h4 id="score">Score: 0</h4>
          </div>
          <h1>Flash Cards Jr.</h1>
          <span style={{fontSize:30,cursor:"pointer"}} onClick={showAddContainer}>&#9776; Add Cards</span>
          
          <div id="cards-container" className="cards" onClick={handleNextClick}>
            <div className="card active" show-answer="true">
              <div className="inner-card">
                <div id="card" className="inner-card-front">
                  <p>
                    Click card to start deck.
                  </p>
                </div>
                <div className="inner-card-back">
                  <p>
                    A programming language
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="navigation">
            <button id="prev" className="nav-button">
              <i className="fas fa-arrow-left"></i>
            </button>

            <div>
              <p id="current"></p>
            
              <div className="message">
                <img src={"https://i.imgur.com/jMsZACT.png"} alt="Speak" style={{ width: '56px', height: '56px'}}/>
                <div id="msg" className="msg">
                  <SpeechRecognition />
                </div>
              </div>
            </div>

            <button id="next" className="nav-button">
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          <div id="overlay" className="overlay" style={{width:0}}>
            <div className="sidenav-container">
              <a href="" className="closebtn" id="hide-overlay" onClick={hideAddContainer}>×</a>
                <div className="list-group">
                    <div className="container">
                      <h1 className="display-4 text-center py-1">Add New Card</h1>
                      <button id="hide" className="btn btn-small btn-ghost">
                        <i className="fas fa-times"></i>
                      </button>
                  
                      <div className="jumbotron p-3 shadow-sm">
                        <form id="create-form" onSubmit={addWord}>
                          <div className="d-flex align-items-center">
                            <input id="add-word" name="item" autoFocus autoComplete="off" className="form-control mr-3" type="text" />
                            <button className="btn btn-primary">Add New Item</button>
                          </div>
                        </form>
                      </div>
                      <div>

                      <form id="deck-form" onSubmit={setDeck}>
                        <input type="text" id="deck-name" placeholder="Name your set..."/>
                        <button >Set Deck</button>
                      </form>

                      <div style={{ 
                        top: '20px',
                        right: '20px', 
                        display: 'absolute',
                        height: '400px', 
                        width: '400px', 
                        border: '4px solid grey' 
                        }}>
                        <h4>
                          A small window to reveal total cards in selected deck.
                        </h4>
                        <div id="cards-set"></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            
          </div>

        )  
  }

export default MainFlash;
