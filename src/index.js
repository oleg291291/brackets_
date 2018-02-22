module.exports = function check(str, bracketsConfig) {
  // your solution
  // check('()', [['(', ')']]) // -> true
  // check('())(', [['(', ')']]) // -> false
  var stack = [];

  var openBr, openBr2, openBr3, closeBr, closeBr2, closeBr3;
  openBr = bracketsConfig[0][0];
  closeBr = bracketsConfig[0][1];
  openBr2 = bracketsConfig[0][0];
  closeBr2 = bracketsConfig[0][1];

  if (bracketsConfig.length > 1) {
    openBr2 = bracketsConfig[1][0];
    closeBr2 = bracketsConfig[1][1];

  }


  for (var i = 0; i < str.length; i++) {


    if (str[i] === openBr) {
      stack.push(str[i]);
    }

    else {
      if (str[i] === closeBr && (stack[stack.length - 1] !== openBr || stack.lenght < 1)) {
        return false;
      }
      else {
        stack.pop();
      }
    }

    if (str[i] === openBr2) {
      stack.push(str[i]);
    }

    else {
      if (str[i] === closeBr2 && (stack[stack.length - 1] !== openBr2 || stack.lenght < 1)) {
        return false;
      }
      else {
        stack.pop();
      }
    }
  }


  if (stack.length == 0) {
    return true;
  }


}

