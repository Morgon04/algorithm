let x = 10,
  y = 5;

function a(m) {
  x += 2;
  return m;
}

function b(m) {
  y++;
  return m;
}

b(a)(b)(a);
a(b)(a)(b);

console.log(`[ ${x}, ${y} ]`);
