/** INSTRUCTIONS **/
/*************************************************
In the start and end input we'll enter the cell identifier.
Your job is to highlight the shortest path from start to end.

If there are more than one paths, pick any;

The deifnition of a path is the set of cells it must traverse. Youw can go vertically or hirizontally in any direction but not diagonally;

this means from cell C3 you can move to B3, C2, C4, D3;

**************************************************/

var container = document.getElementById("container");
var goBtn = document.getElementById("go");
var rowCount = 8;
var colCount = 8;

var rows = new Array(rowCount);
rows.fill(new Array(colCount));
rows = rows.map((row, rowNum) => {
  row.fill(1);
  return row.map((col, colNum) => {
    return `${String.fromCharCode(65 + rowNum)}${colNum + 1}`;
  });
});
const rowsSlice = rows.slice(0);

rowStr = rows.reduce((fr, r) => {
  let colStr = r.reduce((fc, c) => {
    return `${fc}<div class="col">${c}</div>`;
  }, "");
  return `${fr}<div class="row ">${colStr}</div>`;
}, "");

container.innerHTML = rowStr;

// finds the x and y position of the
// given node
function findNode(node, nodeName) {
  let childNodeIdx = -1;
  const foundNode = rows.find(fr => {
    const foundChildNode = fr.find(fc => {
      return fc.toLowerCase() === node.toLowerCase();
    });
    childNodeIdx = fr.indexOf(foundChildNode);

    return fr.includes(foundChildNode);
  });
  return { [nodeName]: [rows.indexOf(foundNode), childNodeIdx] };
}

function findShortestWay(position, end) {
  let shortPath = [];
  shortPath.push([position]);

  while (shortPath.length > 0) {
    const travelledPath = shortPath.shift();
    const pos = travelledPath[travelledPath.length - 1];

    const direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];

    for (let i = 0; i < direction.length; i++) {
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        return travelledPath.concat([end]);
      }

      // if direction values are > rows[0] length continue the loop
      if (
        direction[i][0] >= rows[0].length ||
        direction[i][1] >= rows[0].length
      ) {
        continue;
      }

      // if direction values are > 0, then pushing it
      // to the shortPath
      if (direction[i][0] >= 0 && [direction[i][1]] >= 0) {
        shortPath.push(travelledPath.concat([direction[i]]));
      }
    }
  }
}

const figure = () => {
  // if highlight class is added then removing it initially
  const removeHighlightedClass = document.getElementsByClassName("col");
  for (var k = 0; k < removeHighlightedClass.length; k++) {
    removeHighlightedClass[k].classList.remove("hsp");
  }

  // fetching data from input box
  const enteredStartNode = document.getElementById("start").value;
  const enteredEndNode = document.getElementById("end").value;

  // finds the idx (i.e. pos of x and y) of the entered start and end Node
  const start = findNode(enteredStartNode, "startNode").startNode;
  const end = findNode(enteredEndNode, "endNode").endNode;

  // if start and end array values are > 0
  // then finding the shortest path
  if (start[0] >= 0 && start[1] >= 0 && end[0] >= 0 && end[1] >= 0) {
    const shortestPath = findShortestWay(start, end);

    // if shortest path length > 0
    // then highlighting the shortest path
    if (shortestPath.length > 0) {
      const matrixData = document.getElementById("container");
      for (let i = 0; i < shortestPath.length; i++) {
        matrixData.children[shortestPath[i][0]].children[
          shortestPath[i][1]
        ].classList.add("hsp");
      }
    }
  }
};

goBtn.onclick = figure;
