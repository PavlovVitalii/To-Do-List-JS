const list = document.createElement("div");
const body = document.querySelector("body");
const h1 = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");
const check = document.createElement("input");

list.classList.add("list");
list.append(h1);
list.append(input);
list.append(button);
list.append(ul);
body.append(list);
h1.innerText = "To Do List";
input.type = "text";
button.classList.add("add_button");
button.textContent = "Add";

button.addEventListener("click", () => {
  const li = document.createElement("li");
  const clear = document.createElement("button");
  const p = document.createElement("p");

  li.append(check);
  li.append(p);
  li.append(clear);
  check.type = "checkbox";
  clear.textContent = "Delete";
  p.textContent = input.value;

  ul.append(li);
  input.value = "";
});
