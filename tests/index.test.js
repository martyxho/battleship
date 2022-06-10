import { ship } from '../src/index';

describe('ship tests', () => {
  test('creates ship with correct length', () => {
    const testShip = ship.createShip(5);
    expect(testShip.length).toBe(5);
  });
});

describe('gameboard tests', () => {
  test('expect ');
});
