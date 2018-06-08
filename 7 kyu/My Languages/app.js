//====== S O L U T I O N - 1 ======//

function myLanguages(results) {
  return Object.keys(results).filter(a => results[a] >= 60).sort((a, b) => results[b] - results[a])
};

//====== S O L U T I O N - 2 ======//

function myLanguages(results) {
  const array = [];
  for (let i = 0, num = Object.keys(results).length; i < num; i++) {
    array.push([Object.keys(results)[i], results[Object.keys(results)[i]]]);
  }
  const sorted = array.sort(function (a, b) {
    return b[1] - a[1];
  });
  return sorted.filter(a => a[1] >= 60).map(l => l[0]);
};