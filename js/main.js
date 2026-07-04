//  Todo app Functionality
let todos = [];

// add todos
function addTodo() {
  const newTodo = {
    id: crypto.randomUUID(),
    text: document.getElementById("title-input").value,
    desc: document.getElementById("description-input").value,
    //     priority: document.getElementById("priority-input").value,
    //     priorityColor: document.getElementById("priority-color-input").value,
    completed: false,
    editing: false,
  };

  todos = [...todos, newTodo];
}

// render todo list
function renderTodo() {}

// Load Todos from local storage
function loadTodos() {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
}

// Save Todos to local storage
function saveTodos() {}

// update todo
function updateTodo() {}

// delete incomplete todo
function deleteIncompleteTodo() {}

// delete completed todo
function deleteCompletedTodo() {}

const submitButton = document.getElementById("sumbit-button");
submitButton.addEventListener("click", () => {
  addTodo();
  console.log(todos);
});
