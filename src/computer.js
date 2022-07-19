import gameboard from './gameboard';

const state = (() => {
  const states = {};
  function setLastHit(coord) {
    states.hit = coord;
  }
  function getLastHit() {
    return states.hit;
  }
  function setAdjMissFalse() {
    state.miss = false;
  }
  function setAdjMissTrue() {
    state.miss = true;
  }
  function getAdjMiss() {
    return state.miss;
  }
  function setTraverseTrue() {
    state.traverse = true;
  }
  function setTraverseFalse() {
    state.traverse = false;
  }
  function getTraverse() {
    return state.traverse;
  }
  function setTraverseMissTrue() {
    state.traverseMiss = true;
  }
  function setTraverseMissFalse() {
    state.traverseMiss = false;
  }
  function getTraverseMiss() {
    return state.traverseMiss;
  }
  function setI(i) {
    state.i = i;
  }
  function getI(i) {
    return state.i;
  }
  return {
    setLastHit,
    getLastHit,
    setAdjMissFalse,
    setAdjMissTrue,
    getAdjMiss,
    setTraverseTrue,
    setTraverseFalse,
    getTraverse,
    setTraverseMissTrue,
    setTraverseMissFalse,
    getTraverseMiss,
    setI,
    getI,
  };
})();

const computerFactory = () => {
  const board = gameboard();
  board.randomPopulate();
  state.setAdjMissFalse();
  function logState(coord) {
    const obj = {
      coord, lastHit: state.getLastHit(), trav: state.getTraverse(), i: state.getI(),
    };
    console.log(obj);
  }
  function getBoard() {
    return board;
  }
  function attack(playerBoard) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    while (!playerBoard.full()) {
      if (state.getTraverseMiss()) {
        traverseDir(playerBoard, state.getLastHit());
        return;
      }
      if (state.getAdjMiss()) {
        attackAdjacent(playerBoard, state.getLastHit());
        return;
      }
      const a = (Math.floor(Math.random() * 10)) + 1;
      const b = alphabet[Math.floor(Math.random() * 10)];
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        attackLoop(playerBoard, [a, b]);
        return;
      }
    }
  }
  function attackLoop(playerBoard, coord) {
    const [a, b] = coord;
    const hit = playerBoard.receiveAttack(a, b);
    if (hit) {
      state.setLastHit([a, b]);
      state.setAdjMissFalse();
      state.setTraverseMissFalse();
      const sunk = checkSunk(playerBoard, coord);
      if (sunk) {
        state.setTraverseFalse();
        attack(playerBoard);
        return;
      }
      if (state.getTraverse()) {
        traverseDir(playerBoard, coord);
        return;
      }
      attackAdjacent(playerBoard, [a, b]);
    }
  }

  function checkSunk(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if (grid[a][b].hasOwnProperty('ship')) {
      return grid[a][b].ship.isSunk();
    }
    return grid[a][b].isSunk();
  }
  function checkShip(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if (!grid[a][b]) {
      return false;
    }
    if (grid[a][b].hasOwnProperty('marker')) {
      return grid[a][b].hasOwnProperty('ship');
    }
    return grid[a][b].hasOwnProperty('isSunk');
  }
  function attackAdjacent(playerBoard, coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    const adj = calcAdj(coord);
    let go = true;
    adj.forEach((e, i) => {
      if (go) {
        const [a, b] = e;
        if ((a > 0 && a < 11) && alphabet.includes(b)) {
          if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
            if (!grid[a][b]) {
              state.setAdjMissTrue();
            } else {
              state.setI(i);
              state.setTraverseTrue();
            }
            go = false;
            attackLoop(playerBoard, [a, b]);
          }
        }
      }
    });
  }
  function calcAdj(coord) {
    const [a, b] = coord;
    const left = [a, getAlpha(b, -1)];
    const up = [a - 1, b];
    const right = [a, getAlpha(b, 1)];
    const down = [a + 1, b];
    const adj = [left, up, right, down];
    return adj;
  }
  function traverseDir(playerBoard, coord) {
    const grid = playerBoard.getGrid();
    const adj = calcAdj(coord);
    const i = state.getI();
    const [a, b] = adj[i];
    if (outOfBounds([a, b]) || !checkShip(playerBoard, [a, b])) {
      state.setI(getOpp(i));
    }
    if (attackChecks(playerBoard, [a, b])) {
      if (!grid[a][b]) {
        state.setTraverseMissTrue();
      }
      attackLoop(playerBoard, [a, b]);
      return;
    }
    traverseDir(playerBoard, [a, b]);
  }
  function outOfBounds(coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = coord;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      return false;
    }
    return true;
  }
  function attackChecks(playerBoard, coord) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    const [a, b] = coord;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      if (!grid[a][b] || !grid[a][b].hasOwnProperty('marker')) {
        return true;
      }
    }
    return false;
  }
  function getOpp(i) {
    switch (i) {
      case 0:
        return 2;
      case 1:
        return 3;
      case 2:
        return 0;
      default:
        return 1;
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
