const taskForm = document.getElementById("task-form")
// TODO: Create a new task in firestore database

console.log("taskForm", taskForm)
taskForm.addEventListener("submit", async (event) => {
  event.preventDefault()

  const title = taskForm["task-title"]
  const description = taskForm["task-description"]
  const quantity = taskForm["task-quantity"]

  console.log("data", { title, description, quantity })
})
