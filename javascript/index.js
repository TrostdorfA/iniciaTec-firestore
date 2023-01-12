const taskForm = document.getElementById("task-form")
// TODO: Create a new task in firestore database

import { eraseTask, saveTask } from "./firebase.js"

console.log("taskForm", taskForm)
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  const title = taskForm["task-title"].value
  const description = taskForm["task-description"].value
  const quantity = Number(taskForm["task-quantity"].value)

  try {
    await saveTask(title, description, quantity)
    console.log("Task saved")
    taskForm.reset()
  } catch (error) {
    console.log(error)
  }

  // try {
  //   await eraseTask("1")
  //   console.log("Task erased")
  // } catch (error) {
  //   console.log(error)
  // }
})
