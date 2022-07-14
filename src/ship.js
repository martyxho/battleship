const ship = (() => {
  function createShip(length, i) {
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
      i,
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

export default ship;
