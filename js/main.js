//  Todo app Functionality
let todos = [];

// add todos
function addTodo() {
  const newTodo = {
    id: crypto.randomUUID(),
    text: document.getElementById("title-input").value,
    desc: document.getElementById("description-input").value,
    priority: priority,
    priorityColor: priorityColor,
    completed: false,
    editing: false,
  };

  todos = [...todos, newTodo];
  //   saveTodos(todos);
}

// render todo list
function renderTodo() {}

// // Load Todos from local storage
// function loadTodosّFromLocalStorage() {
//   todos = JSON.parse(localStorage.getItem("todos")) || [];
// }

// // Save Todos to local storage
// function saveTodosToLocalStorage(todosArrey) {
//   localStorage.setItem("todos", JSON.stringify(todosArrey));
// }

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

const tagButton = document.getElementById("tag-button");
const tagImage = document.getElementById("tag-image");
const choosePriority = document.getElementById("choose-priority");
tagButton.addEventListener("click", () => {
  tagImage.classList.toggle("rotate-90");
  choosePriority.classList.toggle("hidden");
  choosePriority.classList.toggle("inline-flex");
});

let priority = null;
let priorityColor = null;

choosePriority.addEventListener("click", (e) => {
  choosePriority.classList.toggle("hidden");
  choosePriority.classList.toggle("inline-flex");

  const button = e.target.closest("button");
  //   console.log(button); just to make sure the code works and future showing
  if (!button) return;

  priority = button.id;
  priorityColor = button.dataset.color;
  const prioritySecondaryColor = button.dataset.secondcolor;

  const priortiyDiv = document.getElementById("priortiy-div");

  priortiyDiv.innerHTML = `
    <button data-color="#11A483" id="low-priority-button" class="inline-flex gap-2 text-[${priorityColor}] bg-[${prioritySecondaryColor}] rounded-lg px-2 py-1 dark:bg-[#233332]">
        <svg id="priority-remove" class="w-4  text-black dark:text-white cursor-pointer " fill="none" stroke="currentColor"
          viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <span>${priority === "low" ? "پایین" : priority === "medium" ? "متوسط" : "بالا"}</span>
      </button>
`;
});
