//====== S O L U T I O N - 1 ======//

function findEvenIndex(arr) {
  for (let i = 1; i < arr.length; i++) {
    left = i === 0 ? 0 : arr.slice(0, i).reduce((a, b) => a + b);
    right = i === arr.length - 1 ? 0 : arr.slice(i + 1, arr.length).reduce((a, b) => a + b);
    if (left === right) {
      return i;
    }
  }
  return -1;
}

//====== S O L U T I O N - 2 ======//

function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
      return i;
    }
  }
  return -1;
}

//====== S O L U T I O N - 3 ======//

function findEvenIndex(arr) {
  return arr.findIndex((e, i, a) => a.slice(0, i).reduce((a, b) => a + b, 0) == a.slice(i + 1).reduce((a, b) => a + b, 0));
}