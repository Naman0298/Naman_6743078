const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

addBtn.addEventListener("click", addTask)

function addTask() {
    const text = taskInput.value.trim()

    if (text === "") {
        return
    }

    const li = document.createElement("li")
    const span = document.createElement("span")
    const doneBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    span.textContent = text

    doneBtn.textContent = "Done"
    doneBtn.className = "done-btn"

    deleteBtn.textContent = "X"
    deleteBtn.className = "delete"

    li.appendChild(span)
    li.appendChild(doneBtn)
    li.appendChild(deleteBtn)

    taskList.appendChild(li)

    taskInput.value = ""

    doneBtn.addEventListener("click", function () {
        li.classList.toggle("done")
    })

    deleteBtn.addEventListener("click", function () {
        li.remove()
    })
}