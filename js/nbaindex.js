var nbasrKey = 'qs2rqu4r4ancbehavns2aqny'

fetch('https://api.sportradar.us/nba/trial/v5/en/games/2019/4/13/schedule.json?api_key=' + nbasrKey, {
  method: 'post', mode: 'no-cors',
})
  .then(response => {return response.json() })
  .then(json => {
    updateGames(json);
    console.log(json);
  })
  .catch(error => {
    console.log('* NBA Sports Radar API Error *');
  })

function updateGames(gamesUpdate){
  gamesUpdate.games.forEach(function(game){
    var gameID = game.id;
    console.log(gameID)
  })
}
