import gameboard from './gameboard';

const playerFactory = () => {
  const board = gameboard();
  board.randomPopulate();
  function getBoard() {
    return board;
  }
  return { getBoard };
};

export default playerFactory;
