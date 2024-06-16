console.log("write the correct konami code");
console.log("hint: the language that this script is written in");

const code = "javascript";
const input = [];

window.addEventListener("keyup", (e) => {
  input.push(e.key);
  input.splice(-code.length - 1, input.length - code.length);
  if (input.join("") === code) cornify_add();
});
