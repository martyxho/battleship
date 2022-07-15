import ship from './ship';

const gameboard = () => {
  let grid = createGameboard();
  const ships = createShips();
  function receiveAttack(a, b) {
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        return 'illegal hit on marker';
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      hitDiagonals(a, b);
      if (coord.isSunk()) {
        hitAroundShip(coord);
      }
      return true;
    }
    grid[a][b] = hitObj();
    return false;
  }
  function hitAroundShip(ship) {
    const coords = findShip(ship);
    coords.forEach((e) => {
      hitSurrounding(e);
    });
  }
  function findShip(ship) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const coords = [];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x && x.hasOwnProperty('ship') && x.ship === ship) {
          const a = i + 1;
          const b = alphabet[j];
          coords.push([a, b]);
        }
      });
    });
    return coords;
  }
  function hitIfPoss(a, b) {
    if (!checkValid(a, b)) {
      return;
    }
    const coord = grid[a][b];
    if (coord) {
      if (coord.hasOwnProperty('marker')) {
        return;
      }
      coord.hit();
      grid[a][b] = hitObj(coord);
      hitDiagonals(a, b);
      return;
    }
    grid[a][b] = hitObj();
  }
  function checkValid(a, b) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      return true;
    }
    return false;
  }
  function hitSurrounding(coord) {
    const sur = getSurrounding(coord);
    sur.forEach((e) => {
      const [a, b] = e;
      hitIfPoss(a, b);
    });
  }
  function getSurrounding(coord) {
    let [a, b] = coord;
    a = +a;
    const q = [a - 1, getAlpha(b, -1)];
    const w = [a - 1, b];
    const e = [a - 1, getAlpha(b, +1)];
    const r = [a, getAlpha(b, -1)];
    const t = [a, getAlpha(b, 1)];
    const y = [a + 1, getAlpha(b, -1)];
    const u = [a + 1, b];
    const i = [a + 1, getAlpha(b, 1)];
    return [q, w, e, r, t, y, u, i];
  }
  function hitDiagonals(a, b) {
    const upLeft = [(+a - 1), getAlpha(b, -1)];
    const upRight = [(+a - 1), getAlpha(b, 1)];
    const downLeft = [(+a + 1), getAlpha(b, -1)];
    const downRight = [(+a + 1), getAlpha(b, 1)];
    const diagonals = [upLeft, upRight, downLeft, downRight];
    diagonals.forEach((e) => hitDiagonal(e));
  }

  function hitDiagonal(d) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = d;
    if ((a > 0 && a < 11) && alphabet.includes(b)) {
      receiveAttack(a, b);
    }
  }

  function getAlpha(b, n) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const i = alphabet.indexOf(b) + n;
    return alphabet[i];
  }
  function hitObj(ship = null) {
    const obj = { marker: 'x' };
    if (ship) {
      obj.ship = ship;
    }
    return obj;
  }
  function randomPopulate() {
    ships.forEach((e) => {
      const { length } = e;
      const x = 11 - length;
      const random = Math.floor(Math.random() * 2) + 1;
      if (random > 1) {
        populateVertical(e);
      } else {
        populateHorizontal(e);
      }
    });
  }
  function populateVertical(e) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const x = 11 - e.length;
    let keepGoing = true;
    while (keepGoing) {
      const letter = alphabet[Math.floor(Math.random() * 10)];
      const number = (Math.floor(Math.random() * x)) + 1;
      const end = number + e.length - 1;
      const test = checkGridVert(number, letter, e);
      if (test) {
        keepGoing = false;
        fillGrid([number, letter], [end, letter], false, e);
      }
    }
  }
  function populateHorizontal(e) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const x = 11 - e.length;
    let keepGoing = true;
    while (keepGoing) {
      const number = Math.floor(Math.random() * 10) + 1;
      const start = Math.floor(Math.random() * x);
      const end = start + e.length - 1;
      const test = checkGridHori(number, start, e);
      if (test) {
        keepGoing = false;
        fillGrid([number, alphabet[start]], [number, alphabet[end]], true, e);
      }
    }
  }
  function checkGridVert(number, letter, ship) {
    let works = true;
    const end = number + ship.length;
    for (let i = number; i < end; i++) {
      const check = !checkSurrounding(i, letter, ship);
      if (grid[i][letter] || check) {
        works = false;
      }
    }
    return works;
  }
  function checkGridHori(number, start, ship) {
    let works = true;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const end = start + ship.length;
    for (let i = start; i < end; i++) {
      const letter = alphabet[i];
      const check = !checkSurrounding(number, letter, ship);
      if (grid[number][letter] || check) {
        works = false;
      }
    }
    return works;
  }
  function checkSurrounding(a, b, shipObj) {
    const i = +a;
    const iUp = i - 1;
    const iDown = i + 1;
    const bLeft = getAlpha(b, -1);
    const bRight = getAlpha(b, 1);
    const upLeft = [iUp, bLeft];
    const up = [iUp, b];
    const upRight = [iUp, bRight];
    const left = [i, bLeft];
    const right = [i, bRight];
    const downLeft = [iDown, bLeft];
    const down = [iDown, b];
    const downRight = [iDown, bRight];
    const surrounding = [upLeft, up, upRight, left, right, downLeft, down, downRight];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    let works = true;
    surrounding.forEach((e) => {
      const [c, d] = e;
      if ((c > 0 && c < 11) && alphabet.includes(d)) {
        const boxValue = grid[c][d];
        if (boxValue) {
          if (!(boxValue === shipObj)) {
            works = false;
          }
        }
      }
    });
    return works;
  }
  function hitAll() {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        const a = i + 1;
        const b = alphabet[j];
        receiveAttack(a, b);
      });
    });
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
    const s4a = ship.createShip(4, 0);
    const s3a = ship.createShip(3, 1);
    const s3b = ship.createShip(3, 2);
    const s2a = ship.createShip(2, 3);
    const s2b = ship.createShip(2, 4);
    const s2c = ship.createShip(2, 5);
    const s1a = ship.createShip(1, 6);
    const s1b = ship.createShip(1, 7);
    const s1c = ship.createShip(1, 8);
    const s1d = ship.createShip(1, 9);

    return [s4a, s3a, s3b, s2a, s2b, s2c, s1a, s1b, s1c, s1d];
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

  function full() {
    let result = true;
    Object.values(grid).forEach((e) => {
      const check = Object.values(e).some(isNullOrShip);
      if (check) {
        result = false;
      }
    });
    return result;
  }
  function isNullOrShip(e) {
    if (!e) {
      return true;
    }
    if (e.hasOwnProperty('isSunk')) {
      return true;
    }
    return false;
  }
  function getShips() {
    return ships;
  }
  function checkDropHor(coord, length, index) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const ship = ships[index];
    const [a, b] = coord;
    const start = alpha.indexOf(b) + 1;
    const end = alpha.indexOf(b) + +length;
    let drop = true;
    for (let i = start; i < end; i++) {
      if (!checkValid(a, alpha[i])) {
        drop = false;
      } else {
        const box = grid[a][alpha[i]];
        if (box) {
          if (!(box === ship)) {
            drop = false;
          }
        }
      }
      if (!checkSurrounding(a, alpha[i], ship)) {
        drop = false;
      }
    }
    return drop;
  }
  function checkDropVer(coord, length, index) {
    let [a, b] = coord;
    a = +a;
    const ship = ships[index];
    let drop = true;
    for (let i = a + 1; i < a + +length; i++) {
      if (!checkValid(i, b)) {
        drop = false;
      } else {
        const box = grid[i][b];
        if (box) {
          if (!(box === ship)) {
            drop = false;
          }
        }
      }
      if (!checkSurrounding(i, b, ship)) {
        drop = false;
      }
    }
    return drop;
  }
  function getCoordsHor(coord, length) {
    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const [a, b] = coord;
    const start = alpha.indexOf(b);
    const end = alpha.indexOf(b) + +length;
    const coords = [];
    for (let i = start; i < end; i++) {
      if (!checkValid(a, alpha[i])) {
        return coords;
      }
      coords.push(`${a},${alpha[i]}`);
    }
    return coords;
  }
  function getCoordsVer(coord, length) {
    let [a, b] = coord;
    a = +a;
    const coords = [];
    for (let i = a; i < a + +length; i++) {
      if (!checkValid(i, b)) {
        return coords;
      }
      coords.push(`${i},${b}`);
    }
    return coords;
  }
  function addShip(coords, i, hor) {
    const ship = ships[i];
    ship.head = coords[0];
    ship.hor = hor;
    coords.forEach((e) => {
      const [a, b] = e.split(',');
      grid[a][b] = ship;
    });
  }
  function removeShip(i) {
    const ship = ships[i];
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    Object.values(grid).forEach((e, i) => {
      Object.values(e).forEach((x, j) => {
        if (x === ship) {
          const a = i + 1;
          const b = alphabet[j];
          grid[a][b] = null;
        }
      });
    });
  }
  function changeOriHor(e) {
    const { head } = e.target.dataset;
    const [a, b] = head.split(',');
    const { length } = e.target.dataset;
    const { i } = e.target.dataset;
    const check = checkDropHor([a, b], length, i);
    if (check) {
      removeShip(i);
      const coords = getCoordsHor([a, b], length);
      addShip(coords, i, true);
    }
  }
  function changeOriVert(e) {
    const { head } = e.target.dataset;
    const [a, b] = head.split(',');
    const { length } = e.target.dataset;
    const { i } = e.target.dataset;
    const check = checkDropVer([a, b], length, i);
    if (check) {
      removeShip(i);
      const coords = getCoordsVer([a, b], length);
      addShip(coords, i, false);
    }
  }
  function resetGrid() {
    grid = createGameboard();
  }
  return {
    getGrid,
    receiveAttack,
    sinkAll,
    allSunk,
    full,
    hitAll,
    checkGridVert,
    checkGridHori,
    fillGrid,
    randomPopulate,
    checkSurrounding,
    getShips,
    checkDropHor,
    checkDropVer,
    getCoordsHor,
    getCoordsVer,
    addShip,
    removeShip,
    changeOriVert,
    changeOriHor,
    resetGrid,
  };
};

export default gameboard;
