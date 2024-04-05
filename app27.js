let count = 1;
let check = true;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.textContent = `Click me ${count}`;
  check ? (count >= 10 ? check = false : count++) : (count <= 1 ? check = true : count--);
});

