//====== S O L U T I O N - 1 ======//

function isValidWalk(walk) {
  const accum = walk.reduce(function (total, amount, index, array) {
    total[amount] = (total[amount] || 0) + 1;
    return total;
  }, {});
  return accum['n'] === accum['s'] && accum['w'] === accum['e'] && Object.keys(accum).map(d => accum[d]).reduce((a, b) => a + b) === 10;
}

//====== S O L U T I O N - 2 ======//

function isValidWalk(walk) {
  let dx = 0,
    dy = 0,
    dt = walk.length;

  for (let i = 0; i < dt; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  console.log(dx, dy);
  return dt === 10 && dx === 0 && dy === 0;
}

//====== S O L U T I O N - 3 ======//

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(d => d === val).length;
  }
  return walk.length === 10 && count('n') === count('s') && count('e') === count('w');
}