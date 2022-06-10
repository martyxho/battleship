import './style.css';

const ship = (() => {
  function createShip(length) {
    const arr = createArr(length);
    const hit = (n) => {
      arr.splice(n, 1, 'hit');
    };
    const isSunk = () => {
      if (arr.every(checkHit)) {
        return true;
      }
      return false;
    };
    const checkHit = (e) => e === 'hit';
    return {
      length,
      hit,
      isSunk,
    };
  }

  function createArr(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(null);
    }
    return arr;
  }

  return { createShip };
})();

const gameboard = (() => {
  populateGameboard();
  function populateGameboard() {
    const gameboard = createGameboard();
    const ships = createShips();
    fillGrid([1, 1], [1, 4], 'hori', ships.s4a, gameboard);
    console.log(gameboard);
  }
  function fillGrid(c1, c2, dir, ship, gameboard) {
    if (dir === 'hori') {
      for (let i = c1[1]; i < c2[1]; i++) {
        gameboard[c1[0]][i] = ship;
      }
    }
  }
  function createShips() {
    const s4a = ship.createShip(4);
    const s3a = ship.createShip(3);
    const s3b = ship.createShip(3);
    const s2a = ship.createShip(2);
    const s2b = ship.createShip(2);
    const s2c = ship.createShip(2);
    const s1a = ship.createShip(1);
    const s1b = ship.createShip(1);
    const s1c = ship.createShip(1);
    const s1d = ship.createShip(1);

    return {
      s4a, s3a, s3b, s2a, s2b, s2c, s1a, s1b, s1c, s1d,
    };
  }

  function createGameboard() {
    const grid = createGrid();
    return grid;
  }
  function createGrid() {
    const inner = createInner();
    const outer = {};
    for (let i = 1; i < 11; i++) {
      outer[i] = { ...inner };
    }
    return outer;
  }
  function createInner() {
    const obj = {};
    for (let i = 1; i < 11; i++) {
      obj[i] = null;
    }
    return obj;
  }
  return { createGameboard };
})();

export { ship, gameboard };
