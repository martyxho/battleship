import gameboard from './gameboard';

const computerFactory = () => {
  const board = gameboard();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  function attack(playerBoard) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    while (!playerBoard.full()) {
      const a = (Math.floor(Math.random() * 10)) + 1;
      const b = alphabet[Math.floor(Math.random() * 10)];
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        playerBoard.receiveAttack(a, b);
        return;
      }
    }
  }
  return { getBoard, attack };
};

export default computerFactory;
