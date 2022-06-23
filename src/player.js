import gameboard from './gameboard';

const playerFactory = () => {
  const board = gameboard();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  function turn(cBoard) {
  }
  return { getBoard };
};

export default playerFactory;
