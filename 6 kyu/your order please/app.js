// SOLUTION 1 //

function order(words){
  if(words === ""){
    return "";
  }
  const keys = words.split(/\s/); // Words splitted by whitespaces
  const values = keys.map(function(item){
    return item.match(/\d/)[0]; // Numbers inside strings matched and saved into values array
  });
  const results = {}; // Created results object
  keys.forEach((key, i) => results[key] = values[i]); 

  /* results = { 4of: '4',
  Fo1r: '1',
  pe6ople: '6',
  g3ood: '3',
  th5e: '5',
  the2: '2' } */

  const sortable = []; // Created empty array in order to sort
  for (let result in results){
    sortable.push([result, results[result]]);
  }

  /* sortable = [ [ '4of', '4' ],
  [ 'Fo1r', '1' ],
  [ 'pe6ople', '6' ],
  [ 'g3ood', '3' ],
  [ 'th5e', '5' ],
  [ 'the2', '2' ] ] */

  const newArr = [];
  sortable.sort((a, b) => a[1] - b[1]).map(item => newArr.push(item[0])); /*
  sortable sorted in ascending order and pushed its [0] into newArray */

 return newArr.join(" ");
}

// SOLUTION 2 //

const order = words => words.split(" ").sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(" ");
