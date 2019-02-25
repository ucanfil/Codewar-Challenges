//====== S O L U T I O N - 1 ======//

function DNAStrand(dna) {
  return dna.split("").map(letter => letter === 'A' ? letter = 'T' : letter === 'T' ? letter = 'A' : letter === 'G' ? letter = 'C' : letter === 'C' ? letter = 'G' : "").join("");
}

//====== S O L U T I O N - 2 ======//

function DNAStrand(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };
  return str.replace(/./g, function (letter) {
    return pairs[letter];
  });
}

//====== S O L U T I O N - 3 ======//

function DNAStrand(str) {
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
  };

  return str.split("").map(letter => pairs[letter]).join("");
}