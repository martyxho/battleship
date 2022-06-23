import './style.css';
import { displayState, endGame } from './dom';
import playerFactory from './player';
import computerFactory from './computer';

const game = (() => {
  const player = playerFactory();
  const pBoard = player.getBoard();
  const computer = computerFactory();
  const cBoard = computer.getBoard();
  displayState.display(pBoard.getGrid(), cBoard.getGrid());
  function gameLoop() {
    computer.attack(pBoard);
    displayState.display(pBoard.getGrid(), cBoard.getGrid());
    if (checkEnd()) {
      endGame('computer');
    }
  }
  function receivePlayerAttack(coord) {
    const [a, b] = coord;
    const hit = cBoard.receiveAttack(a, b);
    displayState.display(pBoard.getGrid(), cBoard.getGrid());
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
  return { receivePlayerAttack };
})();

export default game;
