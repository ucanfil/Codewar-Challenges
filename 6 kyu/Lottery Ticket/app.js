//====== S O L U T I O N - 1 ======//

function bingo(ticket, win) {
  return ticket.reduce((a, b) => {
    for (let i = 0; i < b[0].length; i++) {
      console.log(b[0][i], b[0].charCodeAt(i) === b[1]);
      if (b[0].charCodeAt(i) === b[1]) {
        a.push(b[1]);
        break;
      }
    }
    return a;
  }, []).length >= win ? 'Winner!' : 'Loser!';
}

//====== S O L U T I O N - 2 ======//

function bingo(ticket, win) {
  if (ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win) {
    return "Winner!";
  }
  return "Loser!";
}

//====== S O L U T I O N - 3 ======//

function bingo(ticket, win) {
  return ticket.map(e => e[0].split('').some(x => x.charCodeAt(0) == e[1]))
    .reduce((sum, e) => e ? sum + 1 : sum, 0) >= win ? 'Winner!' : 'Loser!';
}