function additive(no) {
  no = String(no);
  no = no.split("");

  while (no.length > 1) {
    no = String(
      no.reduce((acc, cur) => {
        return Number(acc) + Number(cur);
      })
    ).split('');
  }

  return no.join("");
}

function multiple(no) {
    no = String(no);
    no = no.split("");
  
    while (no.length > 1) {
      no = String(
        no.reduce((acc, cur) => {
          return Number(acc) * Number(cur);
        })
      ).split('');
    }
  
    return no.join("");
  }

console.log(multiple(123456789));
