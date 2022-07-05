import socketService from "../../services/socketService";
export const ScoreBox = ({ credentials }) => {
  const { scores } = socketService.roomInstance;
  return scores
    .filter((player) => player.name !== credentials)
    .map((player) => {
      if (player.life > 0) {
        return (
          <>
            {player.name}
            <br></br>
            {player.score}
            <br></br>
            {player.life}
          </>
        );
      } else {
        return (
          <>
            {player.name}
            <br></br>
            defeated
          </>
        );
      }
    });
};
