const list = document.createElement("div");
const body = document.querySelector("body");
const h1 = document.createElement("h1");
const input = document.createElement("input");
const button = document.createElement("button");
const ul = document.createElement("ul");

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

button.addEventListener("click", createLi);

function createLi() {
  const li = document.createElement("li");
  const clear = document.createElement("button");
  const p = document.createElement("p");
  const check = document.createElement("input");

  li.append(check);
  li.append(p);
  li.append(clear);
  check.type = "checkbox";
  check.id = "check";
  clear.textContent = "Delete";
  p.textContent = input.value;

  ul.append(li);
  input.value = "";

  deleteLi(clear);
  isDone(check, p);
}

function deleteLi(btn) {
  btn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
}

function isDone(checkBox, p) {
  checkBox.addEventListener("change", (event) => {
    if (event.target.checked) {
      p.style.textDecoration = "line-through";
      p.style.textDecorationColor = "red";
    } else {
      p.style.textDecoration = "none";
    }
  });
}
