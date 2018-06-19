//====== S O L U T I O N - 1 ======//

function merge(line) {
  function sorter(arr) {
    let filtered = arr.filter(e => e != 0);
    let length = arr.length - filtered.length;
    for (let i = 0; i < length; i++) {
      filtered.push(0);
    };
    return filtered;
  }
  let sorted = sorter(line);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sorted[i] += sorted[i + 1];
      sorted[i + 1] -= sorted[i + 1];
    }
  };
  return sorter(sorted);
};

//====== S O L U T I O N - 2 ======//
