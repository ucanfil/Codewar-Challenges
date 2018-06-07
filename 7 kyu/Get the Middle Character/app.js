//====== S O L U T I O N - 1 ======//

function getMiddle(s) {
  return s.length % 2 === 1 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2];
}

//====== S O L U T I O N - 2 ======//

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}