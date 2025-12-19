document.addEventListener("DOMContentLoaded", (e)=>{
  BuildTopNavBar()
  setCodeTheme()
  hljs.highlightAll()
  toggleVidSrc()
})

document.querySelector("#themeToggleIcon").addEventListener("click",(e)=>{
  setCodeTheme(true)
})

function toggleVidSrc(){
  if (document.querySelector("#vidSrcToggle").checked){
    document.querySelector("#yt-container").classList.add("hidden")
    document.querySelector("#alt-vid-container").classList.remove("hidden")
    LS.s("use-local-src",true)
  } else {
    document.querySelector("#yt-container").classList.remove("hidden")
    document.querySelector("#alt-vid-container").classList.add("hidden")
    LS.s("use-local-src",false)
  }
}

function setCodeTheme(invert=false){
  let currentTheme = document.querySelector("body").dataset.bsTheme
  if (invert)
    currentTheme = (currentTheme=="dark")?"light":"dark"
  document.querySelector("#highlightjs-css-theme").href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/atom-one-${currentTheme}.min.css`
}

let answer_showing = [
  undefined, // I don't want to zero index this
  false,
  false,
  false,
  false,
  false
]


document.querySelector("#collapse-btn-q1").addEventListener("click",(e)=>{
  answer_showing[1] = !answer_showing[1]
  document.querySelector("#q1-answer-action").innerHTML = (answer_showing[1]) ? "Hide" : "Show"
})

document.querySelector("#collapse-btn-q2").addEventListener("click",(e)=>{
  answer_showing[2] = !answer_showing[2]
  document.querySelector("#q2-answer-action").innerHTML = (answer_showing[2]) ? "Hide" : "Show"
})

document.querySelector("#collapse-btn-q3").addEventListener("click",(e)=>{
  answer_showing[3] = !answer_showing[3]
  document.querySelector("#q3-answer-action").innerHTML = (answer_showing[3]) ? "Hide" : "Show"
})

document.querySelector("#collapse-btn-q4").addEventListener("click",(e)=>{
  answer_showing[4] = !answer_showing[4]
  document.querySelector("#q4-answer-action").innerHTML = (answer_showing[4]) ? "Hide" : "Show"
})

document.querySelector("#collapse-btn-q5").addEventListener("click",(e)=>{
  answer_showing[5] = !answer_showing[5]
  document.querySelector("#q5-answer-action").innerHTML = (answer_showing[5]) ? "Hide" : "Show"
})

document.querySelector("#vidSrcToggle").addEventListener("click",(e)=>{
  toggleVidSrc()
})