//====== S O L U T I O N - 1 ======//

function playerManager(players) {
  if (players === ('' || null)) return [];
  let newArray = [];
  let newObject = {};
  players = players.split(", ");
  for (let i = 0; i < players.length; i += 2) {
    if (i % 2 === 0) {
      newObject['player'] = players[i];
      newObject['contact'] = +players[i + 1];
      newArray.push(newObject);
      newObject = {};
    }
  }
  return newArray;
}

//====== S O L U T I O N - 2 ======//

const playerManager = (players) => players && players.length > 0 ? players.split(', ').reduce((s, n, i) => (i % 2 == 0 ? s.push({ player: n }) : s[i / 2 | 0].contact = +n, s), []) : [];

//====== S O L U T I O N - 3 ======//

function playerManager(a, b = []) {
  return a ? (a.split(', ').map((x, i, a) => i % 2 ? b.push({ player: a[i - 1], contact: +x }) : x), b) : []
}