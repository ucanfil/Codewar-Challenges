//====== S O L U T I O N - 1 ======//

function highAndLow(numbers) {
  let lowest = +Infinity,
      highest = -Infinity;
  numbers.split(" ").forEach(a => {
    if (+a > highest) {
      highest = +a;
    }
    if (+a < lowest) {
      lowest = +a;
    }
  });
  return highest + ' ' + lowest;
}

//====== S O L U T I O N - 2 ======//

function highAndLow(numbers) {
  let array = numbers.split(" ");
  return Math.max(...array) + ' ' + Math.min(...array);
}