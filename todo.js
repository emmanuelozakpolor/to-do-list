const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    // if inputBox is empty, return alert
    alert("You must add a task!");
  } else {
    let li = document.createElement("li"); // create a html element with the tag name
    li.innerHTML = inputBox.value; // to add the text inside the li, hence the innerHtml
    listContainer.appendChild(li); // to display the li inside the listContainer
    let span = document.createElement("span"); // to add a cross icon to delete task
    span.innerHTML = "\u00d7"; // to add/create the cross icon inside the span
    li.appendChild(span); // to display the cross inside the span
  }
  inputBox.value = ""; //to clear the input box after a task is entered
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove()
    saveData();
  }
}, false);

//to save and restore data when page is refreshed
function saveData(){
  localStorage.setItem('data', listContainer.innerHTML)
}

//to display data when web page is reopened
function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
