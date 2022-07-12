import gameboard from './gameboard';

const playerFactory = () => {
  const board = gameboard();
  function getBoard() {
    return board;
  }
  return { getBoard };
};

export default playerFactory;
