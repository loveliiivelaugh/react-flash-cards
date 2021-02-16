import React from 'react'

export default function Overlay() {
  const cardsContainer = document.getElementById('overlay');

  function showAddContainer() {  
    cardsContainer.style.width = '100%';
    }

  function hideAddContainer(){
      try {
        console.log('The x button has been clicked')
        cardsContainer.style.width = '0';

      } catch (error) {
        console.log(error);
      }
    }
    return(
      <div class="overlay">
        <div class="sidenav-container">
          <a href="" class="closebtn" id="hide-overlay" onClick={hideAddContainer}>×</a>
            <div class="list-group">
                <div class="container">
                  <h1 class="display-4 text-center py-1">Add New Card</h1>
                  <button id="hide" class="btn btn-small btn-ghost">
                    <i class="fas fa-times"></i>
                  </button>
              
                  <div class="jumbotron p-3 shadow-sm">
                    <form id="create-form" onSubmit="addWord">
                      <div class="d-flex align-items-center">
                        <input id="new-card" name="item" autoFocus autoComplete="off" class="form-control mr-3" type="text" />
                        <button class="btn btn-primary">Add New Item</button>
                      </div>
                    </form>
                  </div>
              
              <ul class="list-group pb-5"></ul>
              </div>
            </div>
          </div>
        </div>
      )
    }