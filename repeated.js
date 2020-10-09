function removeDuplicate(newElement) {
  let array = [10, 13, 15];
  let arrayMap = {};

  array.forEach(a => {
    arrayMap[a] = a;
  });

  if (arrayMap[newElement] === newElement) {
    return "Already Exists";
  } else {
    array.push(newElement);
    arrayMap[newElement] = newElement;
    return `Element Added and result is = ${array}`;
  }
}

// console.log(removeDuplicate(21));

function alreadyFunction(array) {
  let arrayMap = {};
  let repeatingElement;

  for (let i = 0; i < array.length; i++) {
    if (arrayMap[array[i]] === array[i]) {
      repeatingElement = array[i];
      return `Repeating Element is ${repeatingElement}`;
    } else {
      arrayMap[array[i]] = array[i];
    }
  }
}

console.log(alreadyFunction([10, 12, 15, 10]));
