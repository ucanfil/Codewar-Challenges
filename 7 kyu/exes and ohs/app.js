//====== S O L U T I O N - 1 ======//

function XO(str) {
  let x = 0;
  let o = 0;
  str.toLowerCase().split("").forEach((item) => {
    if (item === "x") {
      x += 1;
    } else if (item === "o") {
      o += 1;
    } else {
      return true;
    }
  });
  return x === o ? true : false;
};

//====== S O L U T I O N - 2 ======//

function XO(str) {
  str = str.toLowerCase().split("");
  return str.filter(item => item === "x").length === str.filter(item => item === "o").length;
};

//====== S O L U T I O N - 3 ======//

function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

XO("xxoo");