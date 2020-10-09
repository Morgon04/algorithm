// const matrix = [
//   [A1, A2, A3, A4, A5, A6, A7, A8],
//   [B1, B2, B3, B4, B5, B6, B7, B8],
//   [C1, C2, C3, C4, C5, C6, C7, C8],
//   [D1, D2, D3, D4, D5, D6, D7, D8],
//   [E1, E2, E3, E4, E5, E6, E7, E8],
//   [F1, F2, F3, F4, F5, F6, F7, F8],
//   [G1, G2, G3, G4, G5, G6, G7, G8],
//   [H1, H2, H3, H4, H5, H6, H7, H8]
// ];

// const horizontalMovement = [1, -1, 0,0];
// const verticalMovement = []
// findShortestPath() {

// }

var matrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0]
];

var start = [4, 0];
var end = [3, 4];

function findWay(position, end) {
  let queue = [];

  matrix[position[0]][position[1]] = 1;
  queue.push([position]);

  while (queue.length > 0) {
    const path = queue.shift();
    const pos = path[path.length - 1];

    const direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];

    for (var i = 0; i < direction.length; i++) {
      // Perform this check first:
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        // return the path that led to the find
        return path.concat([end]);
      }

      if (
        direction[i][0] >= matrix[0].length ||
        direction[i][1] >= matrix[0].length
      ) {
        continue;
      }

      matrix[direction[i][0]][direction[i][1]] = 1;
      // extend and push the path on the queue
      queue.push(path.concat([direction[i]]));
    }
  }
}

var path = findWay(start, end);
console.log(JSON.stringify(path));
