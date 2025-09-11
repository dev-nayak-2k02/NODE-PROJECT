function multiply(count, p, d) {
  let r = p;
  for (var j = 1; j <= count; j++) {
    r = r * d;
  }
  return r;
}

export default multiply;