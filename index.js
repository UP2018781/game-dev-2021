'use strict';
// If your solution needs to add any
// listeners do so here
function init() {

  const nickInput = document.querySelector("#nick");
  nickInput.addEventListener("input", nickChanged);
  
  const playButton = document.querySelector('#play');
  playButton.addEventListener("click", playPressed);


}

function updateLeaderBoard(names, me){

  const top10 = document.querySelector("#top10");
  top10.innerHTML = "";

  let l = names.length;
  if (l>10){
      l = 10;
  }

  for (let i = 0; i<l;i++){

      let ListItem = document.createElement("li");
      ListItem.textContent = names[i];

      if (names[i]===me){
          ListItem.className = "myself";
      }

      top10.append(ListItem);
  }

}

function nickChanged(){

  const nickInput = document.querySelector("#nick"); 
  const nick = nickInput.value;                               //no type selected so <input type="text"> is default. this has attr value which is the text entered inside.
  const displayername = document.querySelector("#playername");
  displayername.textContent = nick;

}

function updateStep(){

  const scaleRange = document.querySelector("#scalerange");
  const scaleVal = parseInt(scaleRange.value);
  step = scaleVal;

}

function leaders(max){
  
  const results = [];

  const top10 = document.querySelector("#top10"); 
  const nameDOMs = top10.children;               //list of all list elements in play rn

  let l = nameDOMs.length;
  if (l>max){ l = max; }                         //make sure only return max amount

  for (let i = 0; i<l;i++){

    const elem = nameDOMs[i].textContent;
    results.push(elem);

  } 

  return(results);

}

function playPressed(){

  window.player.classList.add('hidden');

}



// Don't edit below this line
window.addEventListener('load', init);
