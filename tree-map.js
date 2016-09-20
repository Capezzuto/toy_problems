// Tree Mapping
// Implement a map method on this Tree class.
//
// Map takes a mapping function as its argument.
// Map should generate a new, duplicate tree, with mapped values for each node.
// The original tree should not be modified.


const Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  const returnTree = new Tree(callback(this.value));
  this.children.forEach((node) => {
    returnTree.children.push(node.map(callback));
  });
  return returnTree;
};

//Other Tree helper methods required to build Tree instance properly
