# Noats App

Organize your life and never miss a deadline with Noats, the coolest and simplest note-taking app around! Jot down your tasks, set a time, and prioritize to your needs. No frills, just pure productivity.

## Features

- Create tasks with description, time, and priority
- Validate task time (future dates only)
- View all tasks
- Delete tasks
- Tasks are saved in local storage

## How to Use

1. Clone or download the app to your local machine.
2. Open the `index.html` file in your web browser.
3. Add a task by entering the description, time, and priority.
4. Click on the "Add Task" button.
5. View all your tasks in the tasks section.
6. Delete a task by clicking on the trash icon next to it.

## Example of Usage

```javascript
// Add a task
addTask({
    description: "Buy groceries",
    time: "2023-10-20T15:00",
    priority: "normal"
});

// Display all tasks
displayTasks();
