let input = document.querySelector(".task");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

btn.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  li.appendChild(span);
  li.appendChild(delBtn);
  ul.appendChild(li);
  input.value = "";
}

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
