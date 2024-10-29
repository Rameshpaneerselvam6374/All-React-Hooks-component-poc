// const { json } = require("react-router-dom");
// Initial References
const newTaskInput = document.querySelector
("#new-task input");
const tasksDiv = document.querySelector("tasks");
let deleteTasks, editTasks,tasks;
let updateNote = "";
let count;

//Function  on window load

window.onload = () => {
    updateNote = "";
    count = Object.keys(localStorage).length;
    displayTasks();

};

//function to display the tasks

const displayTasks = () => {
    if (Object.keys(localStorage).length>0){

    }else{
        tasksDiv.computedStyleMap.display = "none";

    }
//Clear the tasks
tasksDiv.innerHTML = "";

//fetch all the kes in local storage 
let tasks = Object.keys(localStorage);
tasks = tasks.sort();

for (let key of tasks) {
    let classValue = "";

    // Get All Values 
    let value = localStorage.getItem(key);
    let taskInnerDiv = document.createElement("div");
taskInnerDiv.classList.add("task");
taskInnerDiv.setAttribute("id",key);
taskInnerDiv.innerHTML = <span id ="taskname">$
{key.split("-")[1]}</span>;
//localstorage would kstore boolean as string so
//we parse it to boolean  back
let editButton = document.createElement
("button");
editButton.classList.add("edit");
editButton.innerHTML = '<i class="<i class="fa-solid fa-pen-to-square"></i>';
if (!json.parse(value)){
    editButton.style.visibility = "hidden";
    taskInnerDiv.classList.add("completed");
}
taskInnerDiv.appendChild(editButton);
taskInnerDiv.innerHTML +='<button class="delete"><i class = "<i class="fa-solid fa-trash"></i></button>';
tasksDiv.appendChild(taskInnerDiv);
}
//task completed
tasks = document.querySelectorAll(".task");
tasks = forEach((element,index) =>{
    element.onclick = () => {
        //local storage updated
        if(element.classList.containes("completed")){
           updateStorage(element.id.split("-")[0],
        element.innerText,false); 
        } else{
            updateStorage(element.id.split("-")[0],
        element.innerText,true);
        }
    };
});

//edit task
editTasks= document.getElementsByClassName("edit");
Array.from(editTasks).forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        //stop propogation to outer elements (if
        //removed when we click delete evenually click will move to parent)
        e.stopPropagation ();
        //disable other edit buttons shen one task is being edited
       disableButons(true);
       //update input value and remove div
       let parent = element.parentElement; 
       newTaskInput.value = parent.querySelector
       ("#taskname").innerText;
       //    set updatenote to the task tha is being edited
       updateNote = parent.id;
       //remove task
       parent.remove();
    });
});
deleteTasks = document.getElementsByClassName("delete");
Array.from(deleteTasks).forEach((element, index)=>{
    element.addEventListener("click",(e)=>{
        e.stopPropagation();
        //delete from local storage ad remove div
        let parent = element.parentElement;
        parentremove();
        count -=1;
    });
    
});
};

//Disable Edit Button

const disableButons = (boot) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};


//remove Task from local storage
const removeTask = (taskValue) => {
    localStorage.removeItem(taskValue);
    displayTasks();
};

//Add tasks to local storage
const updateStorage = (index, taskValue,completed) => {
    localStorage.setItem('${index}-${taskValue}',completed);
    displayTasks();
} ;


//Function to add new task 
document.querySelector("#push").addEventListener("click",()=>{
    //enable the edit button
    disableButons(false);
    if(newTaskInput.value.length==0){
        alert("please enter a task")
    }
    else {
        //storage locally and display from loval storage 
    let existingCount = updateNote.split("-")[0];
    removeTask(updateNote);
    updateStorage(existingCount,newTaskInput,value,false);
    updateNote = "";

    }
    count +=1;
    newTaskInput.value=""; 
})