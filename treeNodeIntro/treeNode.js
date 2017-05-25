'use strict';

const TreeNode = module.exports = function(value) {
  this.value = value;
  this.children = [];
};

TreeNode.prototype.appendChild = function(node) {
    // prototype saves space in memory
    if(!(node instanceof TreeNode))
      throw new Error('node must be type TreeNode');

    this.children.push(node);
}


TreeNode.prototype.prettyPrint = function() {
  let result = '';

  let queue = [this];

  let breadthFirstTraversal = () => {
    let next = queue.pop();
    if(!next) return //stop looping
    result += next.value + ' ';
    next.children.forEach(child => queue.unshift(child));
    breadthFirstTraversal();
  }

  breadthFirstTraversal();
  console.log(result);
  return result;
}

treeRoot = new TreeNode(3);
treeRoot
treeRoot.appendChild(new TreeNode(40));
treeRoot.children[0].appendChild(new TreeNode(7))
