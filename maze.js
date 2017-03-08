//http://www.acmerblog.com/POJ-3984-%E8%BF%B7%E5%AE%AB%E9%97%AE%E9%A2%98-blog-1159.html
//迷宫问题
var maze = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 1, 0]
];

var start = [0, 0];
var end = [4, 4];
var result = [];

var list = [start];

var isSamePosition = function(p1, p2) {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

var isInScope = function(position) {
  return position[0] >= 0 && position[1] >= 0 && position[0] <= 4 && position[1] <= 4;
};

var isUnreached = function(list, position) {
  var unReached = true;
  for (var i = list.length - 2; i >= 0; i--) {
    if (isSamePosition(list[i], position)) {
      unReached = false;
      break;
    }
  }
  return unReached;
};

var isNotWall = function(position) {
  return !maze[position[0]][position[1]];
};

var validPosition = function(list, position) {
  return isUnreached(list, position) && isInScope(position) && isNotWall(position);
};

var findNextPosition = function(list) {
  var lastPosition = list[list.length - 1];
  var x = lastPosition[0];
  var y = lastPosition[1];
  if (isSamePosition(lastPosition, end)) {
    result.push(list);
    return true;
  }
  // 上面的点
  if (validPosition(list, [x, y - 1])) {
    findNextPosition(list.concat([
      [x, y - 1]
    ]));
  }
  // 下面的点
  if (validPosition(list, [x, y + 1])) {
    findNextPosition(list.concat([
      [x, y + 1]
    ]));
  }
  // 左边的点
  if (validPosition(list, [x - 1, y])) {
    findNextPosition(list.concat([
      [x - 1, y]
    ]));
  }
  // 右边的点
  if (validPosition(list, [x + 1, y])) {
    findNextPosition(list.concat([
      [x + 1, y]
    ]));
  }
};

var getShortPath = function(result){
  var length;
  for (var i = result.length - 1; i >= 0; i--) {
    if(!length) {
      length = result[i].length;
    }else if(result[i].length < length){
      length = result[i].length;
    }
  }
  return length;
};

findNextPosition(list);

console.log(getShortPath(result));
