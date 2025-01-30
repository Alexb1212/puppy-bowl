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




// invoke players
getPlayers();