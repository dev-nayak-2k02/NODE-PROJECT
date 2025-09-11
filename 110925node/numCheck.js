import multiply from "./multiply.js";
let numCheck = function (count, n) {
  let add = 0;
  for (var i = 1; i <= count; i++) {
    let d = n % 10;
    let p = 1;
    let mulAns = multiply(count, p, d);
    add += mulAns;
    n = parseInt(n / 10);
  }
  return add;
};

export default numCheck;