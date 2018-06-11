//====== S O L U T I O N - 1 ======//

function accum(s) {
  const newArray = [];
  s.toLowerCase().split('').forEach((item, i, array) => newArray.push(array[i].repeat(1).toUpperCase() + array[i].repeat(i)));
  return newArray.join('-');
}

//====== M Y  S O L U T I O N - 2 ======//

const accum = s => [...s].reduce((str, char, i) => str += '-' + char.toUpperCase() + char.toLowerCase().repeat(i), '').slice(1);

//====== S O L U T I O N - 3 ======//

function accum(s) {
  return s.split('').map((item, i) => item.toUpperCase() + Array(i + 1).join(item.toLowerCase()));
}

// Array(3).join('a') // creates and array of 3 undefined elements
// and later joins them with 'a' returns 'aa'
// despite it looks fancy not readable.