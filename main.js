displayTasks();

function save(event) {
    event.preventDefault();

    const descriptionBox = document.getElementById("descriptionBox");
    const timeBox = document.getElementById("timeBox");
    const priorityBox = document.getElementById("priorityBox");

    const description = descriptionBox.value;
    const time = timeBox.value;
    const priority = priorityBox.value;
    const task = { description, time, priority };

    if (description === "") {
        alert("בבקשה הכנס טקסט");
        return;
    }

    if (time === "") {
        alert("הכנס זמן");
        return;
    }

    // Validate time has not passed
    let d = Date.parse(time);
    if (Date.now() > d) {
        alert("חזרה בזמן עדיין לא אפשרית.. ");
        return;
    }

    // function clean() {
    //     descriptionBox =""
    // }

    let json = localStorage.getItem("tasks");
    const tasks = json ? JSON.parse(json) : [];
    tasks.push(task);

    json = JSON.stringify(tasks);
    localStorage.setItem("tasks", json);

    displayTasks();
    descriptionBox.value = "";
    timeBox.value = "";
    priorityBox.value = "normal";
}

function displayTasks() {
    let json = localStorage.getItem("tasks");
    const tasks = json ? JSON.parse(json) : [];

    let html = "";
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const priorityClass = getPriorityClass(task.priority);

        html += `
            <div class="task ${priorityClass}" id="task">
                <div class="btn">
                    <button class="remove" onclick="remove(${i})"><i class="fas fa-trash"></i></button>
                </div>
                <div class="description-container">
                    <div class="description">${task.description}</div>
                </div>
                <hr>
                <div class="time">${task.time}</div>
            </div>
        `;
    }

    const sectionTasks = document.getElementById("sectionTasks");
    sectionTasks.innerHTML = html;
}

function remove(index) {
    let json = localStorage.getItem("tasks");
    const tasks = json ? JSON.parse(json) : [];

    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);

        json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);

        displayTasks();
    }
}

function getPriorityClass(priority) {
    switch (priority) {
        case "important":
            return "important";
        case "urgent":
            return "urgent";
        default:
            return "normal";
    }
}




