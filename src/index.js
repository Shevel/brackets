module.exports = function check(str, bracketsConfig) {
    // your solution
    var opening = {}; //ложим в обьект скобки для проверки
    for (var i = 0; i < bracketsConfig.length; i++) {
      var property = bracketsConfig[i];
      opening[property[0]] = property[1];
    }
  
    let stack = []; //массив стека
    let ret = ''; //строка с открывающимся скобками
    let flag = true;
  
    for (let i = 0; i < str.length; i++) {
      let c = str[i];
  
      if (opening[c]) {
        if (c == opening[c] && stack[stack.length-1] != c) {
          stack.push(c);
          continue;
        }
        if (c != opening[c]) {
          stack.push(c);
          continue;
        }
      }
  
      if (!opening[c] || (c == opening[c])) {
        if (stack.length === 0 || c != opening[stack[stack.length - 1]]) return false;
  
        if (c == opening[c]) {
          flag = true;
        }
  
        let br = stack.pop();
        c = opening[br];
      }
      ret += c; //возвращаем строку с открывающимися скобками 
    }
  
    if (stack.length > 0) {
      return false;
    }
    return true;
  }
