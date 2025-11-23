document.addEventListener("DOMContentLoaded", (e)=>{
  BuildTopNavBar()
  setCodeTheme()
  hljs.highlightAll()
})

document.querySelector("#themeToggleIcon").addEventListener("click",(e)=>{
  setCodeTheme(true)
})

function setCodeTheme(invert=false){
  let currentTheme = document.querySelector("body").dataset.bsTheme
  if (invert)
    currentTheme = (currentTheme=="dark")?"light":"dark"
  document.querySelector("#highlightjs-css-theme").href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.11.1/build/styles/atom-one-${currentTheme}.min.css`
}