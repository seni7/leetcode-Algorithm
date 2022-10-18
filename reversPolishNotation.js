var evalRPN = function(tokens) {

  const stack = [];

  for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
 
    if (!Number.isNaN(Number(token))) {
      stack.push(token);
    } else {

      const a = Number(stack.pop());
      const b = Number(stack.pop());
      if (token === "*") {
        stack.push(b * a);
      } else if (token === "/") {
        stack.push(b / a >> 0);
      } else if (token === "+") {
        stack.push(b + a);
      } else if (token === "-") {
        stack.push(b - a);
      }
    }
  }

  return stack.pop();
};
