import gameboard from './gameboard';

const computerFactory = () => {
  const board = gameboard();
  let hit;
  board.randomPopulate();
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
        return attackLoop(playerBoard, [a, b]);
      }
    }
  }
  function attackLoop(playerBoard, coord) {
    const [a, b] = coord;
    const hit = playerBoard.receiveAttack(a, b);
    if (hit) {
      saveHit([a, b]);
      attackAdjacent(playerBoard, [a, b]);
    }
    return hit;
  }

  function saveHit(coord) {
    hit = coord;
  }
  function attackAdjacent(playerBoard, coord) {
    // work on using saved hit
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    const left = [a, getAlpha(b, -1)];
    const up = [a - 1, b];
    const right = [a, getAlpha(b, 1)];
    const down = [a + 1, b];
    const adj = [left, up, right, down];
    let attacked = false;
    adj.forEach((e) => {
      if (!attacked) {
        const [c, d] = e;
        if ((c > 0 && c < 11) && alphabet.includes(d)) {
          if (!grid[c][d] || !grid[c][d].hasOwnProperty('marker')) {
            console.log(`attacked ${c} ${d}`);
            attackLoop(playerBoard, [c, d]);
            attacked = true;
          }
        }
      }
    });
    if (!attacked) {
      attack(playerBoard);
    }
  }
  function getAlpha(b, n) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const i = alphabet.indexOf(b) + n;
    return alphabet[i];
  }
  return { getBoard, attack };
};

export default computerFactory;
