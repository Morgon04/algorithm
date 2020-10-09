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

function findPath(startValue, endValue) {
  let output = [];
  const startNode = findNode(startValue, "startNode").startNode;
  const endNode = findNode(endValue, "endNode").endNode;

  let startNodeX = startNode[0];
  let startNodeY = startNode[1];

  let endNodeX = endNode[0];
  let endNodeY = endNode[1];

  while (startNodeX < endNodeX) {
    while (startNodeY < endNodeY) {
      output.push([startNodeX, startNodeY]);
      startNodeY++;
    }
    output.push([startNodeX, startNodeY]);
    startNodeX++;
  }

  while (startNodeX >= endNodeX) {
    console.log(
      `Inside While ${startNodeY} >= ${endNodeY} is ${startNodeY >= endNodeY}`
    );
    while (startNodeY > endNodeY) {
      output.push([startNodeX, startNodeY]);
      startNodeY--;
    }

    while (startNodeY < endNodeY) {
      output.push([startNodeX, startNodeY]);
      startNodeY++;
    }
    output.push([startNodeX, startNodeY]);
    startNodeX--;
  }
  return output;
}
const path = findPath("g2", "c5");
console.log(JSON.stringify(path));
