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
// Theme Management
//
function ToggleTheme(){
  if (LS.g("theme") == null){
    LS.d("theme","dark")
  }

  let currentTheme = LS.g("theme")
  let newTheme = (currentTheme=="dark")?"light":"dark"

  document.querySelector("body").dataset.bsTheme = newTheme
  LS.s("theme",newTheme)
}

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
    "text": "Pages",
    "href": "#",
    "sub_nav":[
      {
        "text": "Hello World!",
        "href":"/pages/hello"
      },
      {
        "text": "Ipsum",
        "href":"/pages/Ipsum"
      },
      {
        "text": "JavaScript Under Pressure",
        "href":"/pages/javascript-under-pressue/"
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
      DropDownItemLink.href = Item.href
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
        DropDownItemLink.href = DropDownItem.href
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
      NavItemLink.href = Item.href
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