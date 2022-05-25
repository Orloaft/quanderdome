//class used to keep track of gamestate thats relevant to all players

class GameService {
  roundCount = null;
  players = [];
  roomId = null;
  questionArray = [];
  chosenAnswers = [];
}

module.exports = GameService;
