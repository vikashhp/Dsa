let s = "()";

let parms = "() {} []";

let stack = [];

let i = 0;
while (i < s.length) {
  stack.push(s[i]);

  let open = stack[stack.length - 2];
  let close = stack[stack.length - 1];

  let ans = open + close;

  if (parms.includes(ans)) {
    console.log(true);
  }
  i++;
}
