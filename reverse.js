function reverse0thWay(...nums) {
  return nums.reverse();
}

function reverseFirstWay() {
  var reversedArr = [];
  var j = 0;
  var i = arguments.length - 1;
  while (j < i) {
    reversedArr[i] = arguments[j];
    reversedArr[j] = arguments[i];
    i--;
    j++;
  }
  return reversedArr;
}

function reverseSecondWay() {
  var arr = [];
  for (var i = arguments.length - 1; i >= 0; i--) {
    arr.push(arguments[i]);
  }
  return arr;
}

console.log(reverse0thWay(3, 2, 5, 7)); // [7,5,2,3]
console.log(reverseFirstWay(3, 2)); // [2,3]
console.log(reverseSecondWay(1, 2)); // [2,1]
console.log(reverseSecondWay(5, 9, 7, 5, 1)); // [1,5,7,9,5]
