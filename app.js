let input = document.querySelector(".task-input");
let btn = document.querySelector(".btn");
let ul = document.querySelector("ul");

btn.addEventListener("click", addTask); // Add task button is clicked
function addTask() {
    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }
    let li = document.createElement("li");

    let check = document.createElement("input"); // Create checkbox
    check.type = "checkbox";
    check.classList.add("check");

    let span = document.createElement("span"); // Task text
    span.innerText = input.value;

    let delBtn = document.createElement("button"); // Delete button
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    li.appendChild(check);  // Append elements
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);

    input.value = "";
}

input.addEventListener("keypress", function(e){ // Add task on Enter key press
    if(e.key === "Enter") addTask();
});

ul.addEventListener("click", function(event) {  // Event delegation for checkbox and delete button
    if(event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if(event.target.classList.contains("check")) {
        let span = event.target.nextElementSibling;
        span.classList.toggle("completed");
    }
});
