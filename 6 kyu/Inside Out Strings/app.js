//====== S O L U T I O N - 1 ======//

function insideOut(x) {
  function reverse(a) {
    let str1 = a.substr(0, Math.floor(a.length / 2)).split("").reverse().join(""),
      str2 = a.length % 2 === 1 ? a.substr(Math.floor(a.length / 2), 1) : "",
      str3 = a.substr(Math.ceil(a.length / 2)).split("").reverse().join("");
    return [str1, str2, str3].join("");
  }
  return x.split(" ").map(e => e.length > 3 ? reverse(e) : e).join(" ");
}

//====== S O L U T I O N - 2 ======//
