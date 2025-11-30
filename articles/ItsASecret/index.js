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

function CanIHaveAPrizeNow(){
  console.log("[Alex] You need to run the method nicely...")
}

function nice(f){
  if (f === undefined) return
  if (f.name == "CanIHaveAPrizeNow")
    console.log("[Alex] I'm sorry, I wish I had a prize to give you. But if you'd like, feel free to get in touch with me via my website <https://ajcolson.com> and maybe we can get some coffee. 😊")
}