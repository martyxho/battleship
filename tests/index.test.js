import { ship, gameboard } from '../src/index';

describe('ship tests', () => {
  test('creates ship with correct length', () => {
    const testShip = ship.createShip(5);
    expect(testShip.length).toBe(5);
  });
});

describe('gameboard tests', () => {
  test('gameboard has correct key values', () => {
    const grid = gameboard.createGameboard();
    const check = {
      1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null, 9: null, 10: null,
    };
    for (const prop in grid) {
      expect(grid[prop]).toEqual(check);
    }
  });
  test('gameboard has correct keys', () => {
    const grid = gameboard.createGameboard();
    for (let i = 1; i < 11; i++) {
      expect(i in grid).toBe(true);
    }
  });
});
