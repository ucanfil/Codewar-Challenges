//====== S O L U T I O N - 1 ======//

function kangaroo(kanga1, rate1, kanga2, rate2) {
  let gap1 = Math.abs(kanga1 - kanga2),
      gap2 = Math.abs(kanga1 + rate1 - kanga2 - rate2);
  return gap2 > gap1 ? false : (kanga2 - kanga1) % (rate1 - rate2) === 0;
}

//====== S O L U T I O N - 2 ======//

function kangaroo(kanga1, rate1, kanga2, rate2) {
  let time = (kanga1 - kanga2) / (rate2 - rate1);
  return time > 0 && time % 1 === 0;
}
