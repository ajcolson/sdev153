document.addEventListener("DOMContentLoaded", (e)=>{
  BuildTopNavBar()
  new bootstrap.Modal(document.querySelector("#msgModal"), {}).show()
})

// Prevent the form on page from reloading the page
document.querySelector("#msgForm").addEventListener("submit",(e)=>{
  let target = document.querySelector("#msgTarget").value
  let text = document.querySelector("#msgText").value

  document.querySelector("#modal_msgTarget").innerHTML = (target != "") ? target : "World"
  document.querySelector("#modal_msgText").innerHTML = (text != "") ? text : `This is a demo of a program/website displaying a hello world message. Click the "Close" button below or the X button at the top right of this window to dismiss this message.`

  e.preventDefault()
})

document.querySelector("#clear-form-btn").addEventListener("click",(e)=>{
  document.querySelector("#msgTarget").value = ""
  document.querySelector("#msgText").value = ""
})