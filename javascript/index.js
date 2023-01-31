const taskForm = document.getElementById("task-form")
const getTasksButton = document.getElementById("get-tasks-button")
// TODO: Create a new task in firestore database

import { saveTask, getTasks, db, auth } from "./firebase.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

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

const loginForm = document.querySelector("#login-form")
console.log("login-form", loginForm)

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  // Create an user with user and password

  const email = loginForm["email"].value
  const password = loginForm["password"].value

  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log("userCredentials", userCredentials)
  } catch (error) {
    console.log("error", error.code)
    if(error.code === "auth/email-already-in-use"){
      alert("El correo ya esta en uso")
  }
  }
  

  console.log("auth", auth)
})