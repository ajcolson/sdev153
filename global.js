//
// Local Storage Shorthand methods
//
let LS = {
  prefix:"__sdev153__",
  g:(name)=>{
    return localStorage.getItem(`${LS.prefix}${name}`)
  },
  s:(name,val)=>{
    localStorage.setItem(`${LS.prefix}${name}`, val)
  },
  d:(name,val)=>{
    if (localStorage.getItem(`${LS.prefix}${name}`) == null){
      localStorage.setItem(`${LS.prefix}${name}`, val)
    }
  }
}

//
// although we're approaching this as if we are deploying to a root of the site, GitHub pages isn't cool like that
// If we happen to be running from the project's GitHub page, let's be sure to include the projects name as a prefix to links
//
let GLOBAL_PATH_PREFIX = ""
if (window.location.hostname == "ajcolson.github.io")
  GLOBAL_PATH_PREFIX = "/sdev153"


//
// Theme Management
//
function ToggleTheme(){
  let currentTheme = document.querySelector("body").dataset.bsTheme
  let newTheme = (currentTheme=="dark")?"light":"dark"
  LS.s("theme",newTheme)
  document.querySelector("body").dataset.bsTheme = newTheme
  document.querySelector("#themeToggleIcon").innerHTML = (newTheme == "dark") ? "light_mode" : "dark_mode"
}

document.addEventListener("DOMContentLoaded",(e)=>{
  LS.d("theme","dark")

  let theme = LS.g("theme")
  document.querySelector("body").dataset.bsTheme = theme
  document.querySelector("#themeToggleIcon").innerHTML = (theme == "dark") ? "light_mode" : "dark_mode"

  
  document.querySelector("#themeToggleIcon").addEventListener("click",(e)=>{
    ToggleTheme();
  })
})


//
// Instead of having to manually edit the navbar on every page, let's just do this dynamically on every page from one master list.
//
let TopBarNavItems = [
  {
    "type": "link",
    "text": "Home",
    "href": "/"
  },
  {
    "type": "link",
    "text": "About",
    "href": "/about/"
  },
  {
    "type": "dropdown",
    "text": "Articles",
    "sub_nav":[
      {
        "text": "Hello World!",
        "href":"/articles/hello/"
      },
      {
        "text": "Ipsum",
        "href":"/articles/Ipsum"
      },
      {
        "text": "JavaScript Under Pressure",
        "href":"/articles/javascript-under-pressue/"
      },
      {
        "text": "Project Euler",
        "href":"/articles/euler/"
      }
    ]
  }
]
function BuildTopNavBar(){
  let NavBar = document.querySelector("#MainNavbar .navbar-nav")
  
  for (let Item of TopBarNavItems){
    if (Item.type == "dropdown"){
      
      let DropDownNavItem = document.createElement("li")
      DropDownNavItem.classList.add("nav-item","dropdown")
      
      let DropDownItemLink = document.createElement("a")
      DropDownItemLink.classList.add("nav-link", "dropdown-toggle")
      DropDownItemLink.href = "#"
      DropDownItemLink.role = "button"
      DropDownItemLink.dataset.bsToggle = "dropdown"
      DropDownItemLink.ariaExpanded = "false"
      DropDownItemLink.innerHTML = Item.text

      DropDownNavItem.append(DropDownItemLink)

      let NavDropdownMenu = document.createElement("ul")
      NavDropdownMenu.classList.add("dropdown-menu")
      
      for (let DropDownItem of Item.sub_nav){
        let DropDownNavItem = document.createElement("li")
        let DropDownItemLink = document.createElement("a")
        DropDownItemLink.classList.add("dropdown-item")
        DropDownItemLink.href = `${GLOBAL_PATH_PREFIX}${DropDownItem.href}`
        DropDownItemLink.innerHTML = DropDownItem.text

        DropDownNavItem.append(DropDownItemLink)
        NavDropdownMenu.append(DropDownNavItem)
      }
      DropDownNavItem.append(NavDropdownMenu)
      
      NavBar.append(DropDownNavItem)
    } else {
      let NavItem = document.createElement("li")
      NavItem.classList.add("nav-item")

      let NavItemLink = document.createElement("a")
      NavItemLink.classList.add("nav-link")
      NavItemLink.href = `${GLOBAL_PATH_PREFIX}${Item.href}`
      NavItemLink.innerHTML = Item.text

      if (window.location.pathname == Item.href){
        NavItemLink.classList.add("active")
        NavItem.ariaCurrent="page"
      }

      NavItem.append(NavItemLink)
      NavBar.append(NavItem)
    } 
  }
}

function randInt(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor( Math.random() * (max - min + 1) + min )
}