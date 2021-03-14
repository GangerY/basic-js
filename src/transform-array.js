const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {  
  if(Object.prototype.toString.call(arr) !== '[object Array]') {
    throw new Error("arument is not Array");
  }
  let finArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "--discard-next") {
      if(i < (arr.length - 1)) {
        i++;
        if (arr[i + 1] == "--discard-prev" || arr[i + 1] == "--double-prev") {
          i++;
        }
      }
    }
    else if(arr[i] === "--discard-prev") {
      if(i > 0) {
        finArr.pop();
      }
    }
    else if(arr[i] === "--double-next") {
      if(i < (arr.length - 1)) {
        finArr.push(arr[i + 1]);
      }
    }
    else if(arr[i] === "--double-prev") {
      if(i > 0) {
        finArr.push(arr[i - 1]);
      }
    }
    else {
      finArr.push(arr[i]);
    }
  }
  return finArr;
};
