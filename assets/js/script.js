var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // create new list items
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task infor and list item
    var taskInfoEl = document.createElement("div");
    //give name to div class
    taskInfoEl.classname = "task-info"
    // add content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class= 'task=type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("click", createTaskHandler);
