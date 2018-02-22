module.exports = function check(str, bracketsConfig) {
  // your solution
//6 try
  //  assert.equal(check('|(|)', config5), false);
  var stack = [];

  var openBr, openBr2, openBr3, closeBr, closeBr2, closeBr3, openBr4, openBr5, openBr6, closeBr4, closeBr5, closeBr6;
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
  if (bracketsConfig.length > 3) {
    openBr3 = bracketsConfig[3][0];
    closeBr3 = bracketsConfig[3][1];
  }
  if (bracketsConfig.length > 4) {
    openBr3 = bracketsConfig[4][0];
    closeBr3 = bracketsConfig[4][1];
  }
  if (bracketsConfig.length > 5) {
    openBr3 = bracketsConfig[5][0];
    closeBr3 = bracketsConfig[5][1];
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
      else if(openBr3 === closeBr3 && stack.length > 0 && stack[stack.length - 1] !== openBr3 && i == (str.length - 1)){
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


       if (str[i] === openBr4) {
        if (openBr4 === closeBr4 && stack.length > 0 && stack[stack.length - 1] === openBr4) {
        stack.pop();
      }
      else if(openBr4 === closeBr4 && stack.length > 0 && stack[stack.length - 1] !== openBr4 && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
      }

      if (str[i] === closeBr4 && openBr4 !== closeBr4) {
        if (str[i] === closeBr4 && (stack[stack.length - 1] !== openBr4 || stack.lenght < 1)) {
          return false;
        }
        else {
          stack.pop();
        }
      }

       if (str[i] === openBr5) {
        if (openBr5 === closeBr5 && stack.length > 0 && stack[stack.length - 1] === openBr5) {
        stack.pop();
      }
      else if(openBr5 === closeBr5 && stack.length > 0 && stack[stack.length - 1] !== openBr5 && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
      }

      if (str[i] === closeBr5 && openBr5 !== closeBr5) {
        if (str[i] === closeBr5 && (stack[stack.length - 1] !== openBr5 || stack.lenght < 1)) {
          return false;
        }
        else {
          stack.pop();
        }
      }

       if (str[i] === openBr6) {
        if (openBr6 === closeBr6 && stack.length > 0 && stack[stack.length - 1] === openBr6) {
        stack.pop();
      }
      else if(openBr6 === closeBr6 && stack.length > 0 && stack[stack.length - 1] !== openBr6 && i == (str.length - 1)){
        return false;
      }
      else {
        stack.push(str[i]);
      }
      }

      if (str[i] === closeBr6 && openBr6 !== closeBr6) {
        if (str[i] === closeBr6 && (stack[stack.length - 1] !== openBr6 || stack.lenght < 1)) {
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

