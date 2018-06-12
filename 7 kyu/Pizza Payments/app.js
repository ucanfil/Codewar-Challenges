//====== S O L U T I O N - 1 ======//

function michaelPays(costs) {
  if (costs < 5.00) return +costs.toFixed(2);
  let max = Math.min(costs / 3, 10);
  return +(costs - max).toFixed(2);
};

//====== S O L U T I O N - 2 ======//

const michaelPays = c => +Math.max(c < 5 ? c : c * 2 / 3, c - 10).toFixed(2);

