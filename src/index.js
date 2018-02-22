module.exports = function check(str, bracketsConfig) {
  // your solution
  // check('()', [['(', ')']]) // -> true
  // check('())(', [['(', ')']]) // -> false
  var stack = [];


  var openBr = bracketsConfig[0][0];
  var closeBr = bracketsConfig[0][1];

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
  }
  
  
if (stack.length == 0){
  return true;
}
  

}

