// SOLUTION 1 //
function stolenLunch(note) {
  const hint = {a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9};
  const hintValues = {'0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'g','7': 'h', '8': 'i', '9': 'j'};

  note = [...note]
  note.forEach((letter, index) => {
    if (letter in hint) {
      note.splice(index, 1, hint[letter])
    } else if (letter in hintValues) {
      note.splice(index, 1, hintValues[letter])
    }
  })

  return note.join('')
}

// SOLUTION 2 //
function stolenLunch(note) {
  return note.replace(/\d|[a-j]/g, v => /\d/.test(v) ? String.fromCharCode(97 + +v) :
  'abcdefghij'.indexOf(v))
}

stolenLunch("you'll n4v4r 6u4ss 8t: cdja, 0123456789") // 'you\'ll never guess it: 2390, abcdefghij'