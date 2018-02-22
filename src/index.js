module.exports = function check(str, bracketsConfig) {
  // your solution
  // check('()', [['(', ')']]) // -> true
  // check('())(', [['(', ')']]) // -> false
  var stack = [];
  var result;
  for (var i = 0; i < str.length; i++) {

    
    if (str[i] === '(') {
      stack.push(str[i]);
    }
    
    else {
      if (str[i] === ')' && (stack[stack.length - 1] !== '(' || stack.lenght < 1)) {
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
