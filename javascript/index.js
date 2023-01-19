const taskForm = document.getElementById("task-form")
const getTasksButton = document.getElementById("get-tasks-button")
// TODO: Create a new task in firestore database

import { saveTask, getTasks } from "./firebase.js"

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

  try {
    await getDocs()
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

window.addEventListener("DOMContentLoaded", async (e) => {
  const querySnapshot = await getTasks()
  console.log("querySnapshot", querySnapshot)
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`)
  })
})

// renderizar en el dom

const taskList = document.getElementById("task-list")
