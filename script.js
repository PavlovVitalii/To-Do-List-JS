const list = document.createElement("div");
list.classList.add("list");
const body = document.querySelector("body");
body.append(list);
const h1 = document.createElement("h1");
h1.innerText = "To Do List";
list.append(h1);
const input = document.createElement("input");
input.type = "text";
list.append(input);
const button = document.createElement("button");
button.textContent = "Add";
list.append(button);
const table = document.createElement("table");
list.append(table);

button.addEventListener("click", () => {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const li = document.createElement("li");
  li.textContent = input.value;
  td.append(li);
  tr.append(td);
  table.append(tr);
});
