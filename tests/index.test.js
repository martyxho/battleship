import gameboard from '../src/gameboard';
import ship from '../src/ship';
import player from '../src/player';
import computer from '../src/computer';

describe('ship tests', () => {
  test('creates ship with correct length', () => {
    const testShip = ship.createShip(5);
    expect(testShip.length).toBe(5);
  });
  test('hit increments if hits is less than length', () => {
    const testShip = ship.createShip(1);
    const result = testShip.hit();
    expect(result).toBe(true);
  });
  test('does not increment if hits >= length', () => {
    const testShip = ship.createShip(1);
    testShip.hit();
    const result = testShip.hit();
    expect(result).toBe(false);
  });
  test('isSunk returns true if hits == length', () => {
    const testShip = ship.createShip(1);
    testShip.hit();
    const result = testShip.isSunk();
    expect(result).toBe(true);
  });
  test('isSunk returns fale if hits < length', () => {
    const testShip = ship.createShip(2);
    testShip.hit();
    const result = testShip.isSunk();
    expect(result).toBe(false);
  });
});

describe('gameboard tests', () => {
  test('gameboard has correct key values', () => {
    const grid = gameboard().getGrid();
    const check = {
      A: null, B: null, C: null, D: null, E: null, F: null, G: null, H: null, I: null, J: null,
    };
    for (const prop in grid) {
      expect(grid[prop]).toEqual(check);
    }
  });
  test('gameboard has correct keys', () => {
    const grid = gameboard().getGrid();
    for (let i = 1; i < 11; i++) {
      expect(i in grid).toBe(true);
    }
  });
});

describe('populated gameboard tests', () => {
  let gBoard;
  beforeEach(() => {
    gBoard = gameboard();
    gBoard.populateGameboard();
  });
  test('gameboard has ships in correct positions', () => {
    const grid = gBoard.getGrid();
    const arr = [grid[1].D, grid[1].J, grid[3].J, grid[4].C, grid[4].D, grid[4].E, grid[5].A, grid[5].I, grid[6].A, grid[6].D, grid[6].E, grid[6].F, grid[6].I, grid[7].A, grid[8].A, grid[8].C, grid[8].E, grid[9].E, grid[10].H, grid[10].I];
    arr.forEach((e, i) => {
      if (e === null) {
        console.log(i);
      }
      expect(e).not.toBeNull();
    });
  });
  test('marks hitObj with ship prop', () => {
    let grid = gBoard.getGrid();
    expect(grid[5].A.hasOwnProperty('length')).toBe(true);
    gBoard.receiveAttack(5, 'A');
    grid = gBoard.getGrid();
    expect(grid[5].A.ship.hasOwnProperty('length')).toBe(true);
  });
  test('marks x', () => {
    gBoard.receiveAttack(1, 'A');
    const grid = gBoard.getGrid();
    expect(grid[1].A.marker).toBe('x');
  });
  test('returns illegal if called on same coord', () => {
    gBoard.receiveAttack(1, 'A');
    const fn = () => gBoard.receiveAttack(1, 'A');
    expect(fn).toThrow();
  });
  test('returns true if all ships are sunk', () => {
    gBoard.sinkAll();
    const result = gBoard.allSunk();
    expect(result).toBe(true);
  });
  test('returns false if not all ships are sunk', () => {
    const result = gBoard.allSunk();
    expect(result).toBe(false);
  });
});

describe('player tests', () => {
  test('returns a gameboard obj', () => {
    const p1 = player();
    const board = p1.getBoard();
    expect(board.hasOwnProperty('sinkAll')).toBe(true);
  });
});

describe('computer tests', () => {
  test('returns a gameboard obj', () => {
    const c1 = computer();
    const board = c1.getBoard();
    expect(board.hasOwnProperty('sinkAll')).toBe(true);
  });
  test('calls receive attack when board is not full', () => {
    const board = gameboard();
    board.populateGameboard();
    const grid = board.getGrid();
    const mockBoard = { full: () => false, getGrid: () => grid, receiveAttack: jest.fn() };
    const c1 = computer();
    c1.attack(mockBoard);
    expect(mockBoard.receiveAttack.mock.calls.length).toBe(1);
  });
  test('does not call receive attack when board is full', () => {
    const board = gameboard();
    board.populateGameboard();
    const grid = board.getGrid();
    const mockBoard = { full: () => true, getGrid: () => grid, receiveAttack: jest.fn() };
    const c1 = computer();
    c1.attack(mockBoard);
    expect(mockBoard.receiveAttack.mock.calls.length).toBe(0);
  });
  test('calls recieve attack with valid args', () => {
    const board = gameboard();
    board.populateGameboard();
    const grid = board.getGrid();
    const mockBoard = { full: () => false, getGrid: () => grid, receiveAttack: jest.fn() };
    const c1 = computer();
    c1.attack(mockBoard);
    const a = mockBoard.receiveAttack.mock.calls[0][0];
    const b = mockBoard.receiveAttack.mock.calls[0][1];
    expect(a).toBeLessThanOrEqual(10);
    expect(a).toBeGreaterThanOrEqual(1);
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    expect(alphabet).toContain(b);
  });
  test('does not call receive attack on grids that have been hit', () => {
    const board = gameboard();
    board.hitAll();
    const grid = board.getGrid();
    grid[1].A = null;
    const mockBoard = { full: () => false, getGrid: () => grid, receiveAttack: jest.fn() };
    const c1 = computer();
    c1.attack(mockBoard);
    expect(mockBoard.receiveAttack).toHaveBeenCalledWith(1, 'A');
  });
  test('calls receive attack on ships', () => {
    const board = gameboard();
    board.hitAll();
    const grid = board.getGrid();
    const testShip = ship.createShip(1);
    grid[1].A = testShip;
    const mockBoard = { full: () => false, getGrid: () => grid, receiveAttack: jest.fn() };
    const c1 = computer();
    c1.attack(mockBoard);
    expect(mockBoard.receiveAttack).toHaveBeenCalledWith(1, 'A');
  });
});
