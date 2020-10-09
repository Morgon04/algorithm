const matrix = [
  ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"],
  ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8"],
  ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8"],
  ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8"],
  ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8"],
  ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"],
  ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"],
  ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8"]
];

function findNode(node, nodeName) {
  let childNodeIdx = -1;
  const foundNode = matrix.find(fr => {
    const foundChildNode = fr.find(fc => {
      return fc.toLowerCase() === node.toLowerCase();
    });
    childNodeIdx = fr.indexOf(foundChildNode);

    return fr.includes(foundChildNode);
  });
  return { [nodeName]: [matrix.indexOf(foundNode), childNodeIdx] };
}

// console.log(findNode("A8", "endNode"));

function findWay(position, end) {
  let queue = [];

  // an array that contains the cells that have already visited
  let visited = [];

  //An array that contains cells that can not be entered for this position
  let invalidCells = [];

  // matrix[position[0]][position[1]] = 1;
  queue.push([position]);

  while (queue.length > 0) {
    const path = queue.shift();
    const pos = path[path.length - 1];

    const direction = [
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1],
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1]
    ];

    for (let i = 0; i < direction.length; i++) {
      // Perform this check first:

      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        return path.concat([end]);
      }

      if (
        direction[i][0] >= matrix[0].length ||
        direction[i][1] >= matrix[0].length
      ) {
        invalidCells.push(direction[i]);
        continue;
      }
      if (direction[i][0] >= 0 && [direction[i][1]] >= 0) {
        // matrix[direction[i][0]][direction[i][1]] = 1;
        // extend and push the path on the queue
        queue.push(path.concat([direction[i]]));
      }

      //add the current position to the array of visited cells
      visited.push(pos);

      if (invalidCells.length == 4) {
        //remove the deadlock from the array
        visited.pop();
      }
    }
  }
}

const start = findNode("a1", "startNode").startNode;
const end = findNode("h8", "endNode").endNode;

const path = findWay(start, end);
console.log(JSON.stringify(path));
