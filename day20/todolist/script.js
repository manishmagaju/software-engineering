// ==========================================
// TODO LIST JAVASCRIPT
// ==========================================


// ==========================================
// 1. GET HTML ELEMENTS
// ==========================================

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearBtn");


// ==========================================
// 2. CHECK HTML ELEMENTS
// ==========================================

// This helps us find the problem if an ID
// in HTML doesn't match the JavaScript.

console.log("Input:", todoInput);
console.log("Add Button:", addBtn);
console.log("Todo List:", todoList);
console.log("Task Count:", taskCount);
console.log("Clear Button:", clearBtn);


// ==========================================
// 3. GET TODOS FROM LOCAL STORAGE
// ==========================================

// Get previously saved todos.
//
// If there is no saved data,
// use an empty array [].

let todos = JSON.parse(localStorage.getItem("todos")) || [];


// ==========================================
// 4. SAVE TODOS
// ==========================================

function saveTodos() {

    // Convert the JavaScript array into JSON
    // and save it in browser storage.

    localStorage.setItem("todos", JSON.stringify(todos));
}


// ==========================================
// 5. DISPLAY TODOS
// ==========================================

function displayTodos() {

    // Clear the current list first.
    todoList.innerHTML = "";


    // Go through every todo.
    todos.forEach(function(todo) {

        // Create <li>
        const li = document.createElement("li");

        li.className =
            "bg-white p-4 rounded-xl shadow-sm flex items-center justify-between";


        // ==================================
        // LEFT SIDE
        // ==================================

        const leftDiv = document.createElement("div");

        leftDiv.className =
            "flex items-center gap-3";


        // ==================================
        // CHECKBOX
        // ==================================

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.checked = todo.completed;

        checkbox.className =
            "w-5 h-5 cursor-pointer";


        // When checkbox changes
        checkbox.addEventListener("change", function() {

            // Update completed value
            todo.completed = checkbox.checked;

            // Save changes
            saveTodos();

            // Display again
            displayTodos();
        });


        // ==================================
        // TODO TEXT
        // ==================================

        const span = document.createElement("span");

        span.textContent = todo.text;

        span.className =
            "text-gray-700";


        // If completed
        if (todo.completed) {

            span.classList.add("line-through");
            span.classList.add("text-gray-400");
        }


        // Put checkbox and text inside leftDiv
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);


        // ==================================
        // DELETE BUTTON
        // ==================================

        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className =
            "text-red-500 hover:text-red-700 font-medium";


        // Delete todo
        deleteBtn.addEventListener("click", function() {

            // Keep every todo except
            // the one we want to delete.

            todos = todos.filter(function(item) {

                return item.id !== todo.id;
            });


            // Save updated array
            saveTodos();

            // Display updated list
            displayTodos();
        });


        // ==================================
        // ADD ELEMENTS TO <li>
        // ==================================

        li.appendChild(leftDiv);

        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });


    // Update task count
    taskCount.textContent = todos.length;
}


// ==========================================
// 6. ADD TODO
// ==========================================

function addTodo() {

    // Get text from input
    const text = todoInput.value.trim();


    // Don't allow empty task
    if (text === "") {

        alert("Please enter a task!");

        return;
    }


    // Create todo object
    const newTodo = {

        // Unique ID
        id: Date.now(),

        // Task text
        text: text,

        // Initially not completed
        completed: false
    };


    // Add todo to array
    todos.push(newTodo);


    // Save todos
    saveTodos();


    // Display todos
    displayTodos();


    // Clear input
    todoInput.value = "";


    // Put cursor back into input
    todoInput.focus();
}


// ==========================================
// 7. ADD BUTTON
// ==========================================

addBtn.addEventListener("click", function() {

    addTodo();
});


// ==========================================
// 8. ENTER KEY
// ==========================================

todoInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTodo();
    }
});


// ==========================================
// 9. CLEAR ALL
// ==========================================

clearBtn.addEventListener("click", function() {

    // If there are no todos
    if (todos.length === 0) {

        alert("There are no tasks to delete.");

        return;
    }


    // Ask for confirmation
    const confirmDelete = confirm(
        "Are you sure you want to delete all tasks?"
    );


    // If user clicks Cancel
    if (!confirmDelete) {

        return;
    }


    // Empty the array
    todos = [];


    // Save empty array
    saveTodos();


    // Display empty list
    displayTodos();
});


// ==========================================
// 10. INITIAL DISPLAY
// ==========================================

// Display saved todos when page loads.

displayTodos();