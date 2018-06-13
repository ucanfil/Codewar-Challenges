//====== S O L U T I O N - 1 ======//

function disariumNumber(n) {
  let array = n.toString().split("");
  return array.map((a, i) => Math.pow(a, i + 1)).reduce((a, b) => a + b) === n ? "Disarium !!" : "Not !!";
}

//====== S O L U T I O N - 2 ======//

function disariumNumber(n) {
  return n.toString().split("").reduce((a, b, i) => a + b ** (i + 1), 0) === n ? "Disarium !!" : "Not !!";
}