import './style.css';
import { displayState, endGame } from './dom';
import playerFactory from './player';
import computerFactory from './computer';

const game = (() => {
  const player = playerFactory();
  const pBoard = player.getBoard();
  const ships = pBoard.getShips();
  const computer = computerFactory();
  const cBoard = computer.getBoard();
  displayState.displayShipBox(ships);
  displayState.display(pBoard);
  function gameLoop(comp = computer) {
    comp.attack(pBoard);
    displayState.displayHitsBoth(pBoard.getGrid(), cBoard.getGrid());
    if (checkEnd()) {
      endGame('computer');
    }
  }
  function receivePlayerAttack(coord) {
    const [a, b] = coord;
    const hit = cBoard.receiveAttack(a, b);
    displayState.displayHitsBoth(pBoard.getGrid(), cBoard.getGrid());
    if (checkEnd()) {
      endGame('player');
      return;
    }
    if (hit) {
      return;
    }
    gameLoop();
  }

  function checkEnd() {
    return (pBoard.allSunk() || cBoard.allSunk());
  }
  function getPBoard() {
    return pBoard;
  }
  return { receivePlayerAttack, gameLoop, getPBoard };
})();

export default game;
