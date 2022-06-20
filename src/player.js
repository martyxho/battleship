import gameboard from './gameboard';

const player = () => {
  const board = gameboard();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  return { getBoard };
};

export default player;
