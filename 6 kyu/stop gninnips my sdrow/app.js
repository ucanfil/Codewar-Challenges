// SOLUTION 1 //

const spinWords = words => words.split(" ").reduce((a, b) => {
  if(b.length < 4){
    a.push(b);
  } else {
    a.push(b.split("").reverse().join(""));
  }
  return a;
},[]).join(" ");

// SOLUTION 2 //

const spinWords = words => words.split(" ").map(word => word.length > 4 ? word.split("").reverse().join("") : word).join(" ");

// SOLUTION 3 //

const spinWords = words => words.replace(/\w{5,}/g, word => word.split("").reverse().join(""));