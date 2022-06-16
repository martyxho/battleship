import './style.css';

const ship = (() => {
  function createShip(length) {
    let hits = 0;
    const hit = (n) => {
      if (hits < length) {
        hits += 1;
        return true;
      }
      return false;
    };
    const isSunk = () => {
      if (hits == length) {
        return true;
      }
      return false;
    };
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

const gameboard = () => {
  const grid = createGameboard();

  function receiveAttack(a, b) {
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        return 'illegal';
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      return;
    }
    grid[a][b] = hitObj();
    return grid[a][b];
  }

  function hitObj(ship = null) {
    const obj = { marker: 'x' };
    if (ship) {
      obj.ship = ship;
    }
    return obj;
  }
  function populateGameboard() {
    const ships = createShips();
    fillGrid([5, 'A'], [8, 'A'], false, ships.s4a);
    fillGrid([4, 'C'], [4, 'E'], true, ships.s3a);
    fillGrid([6, 'D'], [6, 'F'], true, ships.s3b);
    fillGrid([8, 'E'], [9, 'E'], false, ships.s2a);
    fillGrid([5, 'I'], [6, 'I'], false, ships.s2b);
    fillGrid([10, 'H'], [10, 'I'], true, ships.s2c);
    fillGrid([1, 'D'], [1, 'D'], true, ships.s1a);
    fillGrid([1, 'J'], [1, 'J'], true, ships.s1b);
    fillGrid([3, 'J'], [3, 'J'], true, ships.s1c);
    fillGrid([8, 'C'], [8, 'C'], true, ships.s1d);
  }
  function sinkAll() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x) {
          if (x.hasOwnProperty('isSunk')) {
            const a = i + 1;
            const b = alphabet[j];
            receiveAttack(a, b);
          }
        }
      });
    });
  }
  function allSunk() {
    let noShips = true;
    Object.values(grid).forEach((e) => {
      Object.values(e).forEach((x) => {
        if (x) {
          if (x.hasOwnProperty('isSunk')) {
            noShips = false;
          }
        }
      });
    });
    return noShips;
  }
  function fillGrid(c1, c2, hori, ship) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    if (hori) {
      const start = alphabet.indexOf(c1[1]);
      const end = alphabet.indexOf(c2[1]);
      for (let i = start; i <= end; i++) {
        const alpha = alphabet[i];
        grid[c1[0]][alpha] = ship;
      }
    } else {
      for (let i = c1[0]; i <= c2[0]; i++) {
        grid[i][c1[1]] = ship;
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
    const inner = createInner();
    const outer = {};
    for (let i = 1; i < 11; i++) {
      outer[i] = { ...inner };
    }
    return outer;
  }
  function createInner() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const obj = {};
    alphabet.forEach((e) => obj[e] = null);
    return obj;
  }

  function getGrid() {
    return grid;
  }
  return {
    getGrid, populateGameboard, receiveAttack, sinkAll, allSunk,
  };
};

const player = () => {
  const board = gameboard();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  return { getBoard };
};

const computer = () => {
  const board = gameboard();
  board.populateGameboard();
  function getBoard() {
    return board;
  }
  function attack(playerBoard) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const grid = playerBoard.getGrid();
    console.log(Object.keys(grid));
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (!x) {
          const a = i + 1;
          const b = alphabet[j];
          playerBoard.receiveAttack(a, b);
        }
      });
    });
  }
  return { getBoard, attack };
};

const gBoard = gameboard();
gBoard.populateGameboard();
gBoard.sinkAll();

export {
  ship, gameboard, player, computer,
};
