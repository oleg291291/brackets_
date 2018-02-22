module.exports = function check(str, bracketsConfig) {
  // your solution
//3conf
  //  assert.equal(check('|(|)', config5), false);
  var stack = [];

  var openBr, openBr2, openBr3, closeBr, closeBr2, closeBr3;
  openBr = bracketsConfig[0][0];
  closeBr = bracketsConfig[0][1];

  if (bracketsConfig.length > 1) {
    openBr2 = bracketsConfig[1][0];
    closeBr2 = bracketsConfig[1][1];
  }
  if (bracketsConfig.length > 2) {
    openBr3 = bracketsConfig[2][0];
    closeBr3 = bracketsConfig[2][1];
  }


  for (var i = 0; i < str.length; i++) {


    if (str[i] === openBr) {

      if (openBr === closeBr && stack.length > 0 && stack[stack.length - 1] === openBr) {
        stack.pop();
      }
      else if(openBr === closeBr && stack.length > 0 && stack[stack.length - 1] !== openBr && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
    }

    if (str[i] === closeBr && openBr !== closeBr) {
      if (str[i] === closeBr && (stack[stack.length - 1] !== openBr || stack.lenght < 1)) {
        return false;
      }
      else {
        stack.pop();
      }
    }


    
      if (str[i] === openBr2) {
        if (openBr2 === closeBr2 && stack.length > 0 && stack[stack.length - 1] === openBr2) {
        stack.pop();
      }
      else if(openBr2 === closeBr2 && stack.length > 0 && stack[stack.length - 1] !== openBr2 && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
      }

      if (str[i] === closeBr2 && openBr2 !== closeBr2) {
        if (str[i] === closeBr2 && (stack[stack.length - 1] !== openBr2 || stack.lenght < 1)) {
          return false;
        }
        else {
          stack.pop();
        }
      }


     
      if (str[i] === openBr3) {
        if (openBr3 === closeBr3 && stack.length > 0 && stack[stack.length - 1] === openBr3) {
        stack.pop();
      }
      else if(openBr === closeBr3 && stack.length > 0 && stack[stack.length - 1] !== openBr3 && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
      }

      if (str[i] === closeBr3 && openBr3 !== closeBr3) {
        if (str[i] === closeBr3 && (stack[stack.length - 1] !== openBr3 || stack.lenght < 1)) {
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
  else {
    return false;
  }


}

