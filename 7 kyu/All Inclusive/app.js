//====== S O L U T I O N - 1 ======//

function containAllRots(string, arr) {
  const array = [];
  for (let i = 0, num = string.length; i < num; i++) {
    string = string.substr(1).concat(string[0]);
    if (arr.includes(string)) {
      array.push(arr.includes(string))
    } else { return false }
  }
  return array.every(e => e === true);
}

//====== S O L U T I O N - 2 ======//

containAllRots = (s, a) => Array.from(s).map((e, i) => s.slice(i) + s.slice(0, i)).every(e => a.includes(e));

//====== S O L U T I O N - 3 ======//

function containAllRots(str, arr) {
  for (var i = 0; i < str.length; i++) {
    if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
      return false
    }
  }
  return true
}
