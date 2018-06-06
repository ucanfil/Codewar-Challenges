//====== S O L U T I O N - 1 ======//

String.prototype.toJadenCase = function () {
  return this.split(" ").map(word => word.split("")[0].toUpperCase() + word.slice(1)).join(" ");
};

//====== S O L U T I O N - 2 ======//

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) { return x.toUpperCase(); });
};