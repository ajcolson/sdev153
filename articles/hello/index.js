document.addEventListener("DOMContentLoaded", (e)=>{
  BuildTopNavBar()
  new bootstrap.Modal(document.querySelector("#msgModal"), {}).show()
})

// Prevent the form on page from reloading the page
document.querySelector("#msgForm").addEventListener("submit",(e)=>{
  let target = document.querySelector("#msgTarget").value
  let text = document.querySelector("#msgText").value

  document.querySelector("#modal_msgTarget").innerHTML = (target != "") ? target : "World"
  document.querySelector("#modal_msgText").innerHTML = (text != "") ? text : `Thank you for visiting this page. Click the "Close" button below to dismiss this message.`

  e.preventDefault()
})