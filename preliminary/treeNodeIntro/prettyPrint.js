'use strict';

const Tree = module.exports = function() {
  this.root = null;
}

Tree.prototype.add = function(val, parentVal) {
  let newNode = new Node(val)

  if(!this.root) {
    this.root = newNode;
    return;
  }

  this.preOrder( node => {
    if(node.val === parentVal) {
      node.children.push(newNode);
      return;
    }
  })
}

Tree.prototype.preOrder= function(cb) {
  _walk(this.root)

  function _walk(node) {
    cd(node)
    node.children.forEach(_walk)
  }
}


Tree.prototype.prune = function(val) {

}

Tree.prototype.remove = function(val) {
  
}
