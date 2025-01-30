// create state object for players
const state = {
  players:[],
  breed: []
}

// grab main
const main = document.querySelector(`main`);

// create async for players
const getPlayers = async() => {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players`);
  console.log(response)

  const jsonObject = await response.json();
  console.log(jsonObject.data.players);

  const allPlayers = jsonObject.data.players

  state.players = allPlayers;
  renderPlayers();
}

// render players
const renderPlayers = () => {
  main.innerHTML = ``;

  // create ol
  const ol = document.createElement(`ol`);
  
  // go through each player
  state.players.forEach((singlePlayer) => {
    // create li for each player
    const li = document.createElement(`li`);
    // put player name in li
    li.innerText = singlePlayer.name

    // add event listener for li
    li.addEventListener(`click`, () => {
      state.breed = singlePlayer;
      renderPlayerBreed();
    })

    // append li to the ol
    ol.append(li);
  });

  main.append(ol);
}


// invoke players
getPlayers();