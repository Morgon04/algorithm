var matrix = [[1, 1, 1, 1, 1, 1, 1, 1]];

var start = [0, 0];
var end = [0, 7];

function findWay(position, end) {
  var queue = [];

  queue.push([position]); // store a path, not just a position

  while (queue.length > 0) {
    var path = queue.shift(); // get the path out of the queue
    console.log("Path", path);

    var pos = path[path.length - 1]; // ... and then the last position from it
    console.log("Pos", pos);
    var direction = [
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

      // extend and push the path on the queue
      queue.push(path.concat([direction[i]]));
    }
  }
}

var path = findWay(start, end);
console.log(JSON.stringify(path));

// var direction = [
//     [pos[0] + 1, pos[1]],
//     [pos[0], pos[1] + 1],
//     [pos[0] - 1, pos[1]],
//     [pos[0], pos[1] - 1]
//   ];
