// 二叉树中两个结点的距离 
// http://www.acmerblog.com/distance-between-given-keys-5995.html
var Node = function(id) {
  this.id = id;
  this.left;
  this.right;
}；

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

//这里递归函数中，路径的传递使用了concat可能会有内存问题
var getNodePath = function(tree, nodeId, path) {
  if (!tree) {
    return false;
  }
  path = path || [];
  if (tree.id === nodeId) {
    return path.concat(tree.id);
  }

  var res = getNodePath(tree.left, nodeId, path.concat(tree.id));
  if (res) {
    return res;
  }
  res = getNodePath(tree.right, nodeId, path.concat(tree.id));
  if (res) {
    return res;
  }
};

var samePathLength = function(path1, path2) {
  var length = 0;
  for (var i = 0; i < path1.length; i++) {
    if (path1[i] === path2[i]) {
      length++;
    } else {
      break;
    }
  }
  return length;
};



var distance = function(node1, node2) {
  var path1 = getNodePath(root, node1);
  var path2 = getNodePath(root, node2);
  return path1.length + path2.length - 2 * samePathLength(path1, path2);
};

console.log(distance(6, 4));
