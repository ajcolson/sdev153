const CardsInMyHand = [
  /* TEMPLATE
  {
    "title":"",
    "text":"",
    "action_text":"",
    "icon":"",
    "target":""
  }
  */
  {
    "title": "Hello World!",
    "text": "Come say hello to the world...",
    "action_text": "Read the article",
    "icon":"",
    "img":"./pages/hello/hello_world.jpg",
    "img_alt":"Hello, World!",
    "target":"./pages/hello"
  }, {
    "title": "Ipsum",
    "text": "Let's do more than just Lorem.",
    "action_text": "Read the article",
    "icon":"",
    "img":"placeholder_image.png",
    "target":"./pages/Ipsum"
 }, {
    "title": "JavaScript Under Pressure",
    "text": "How good is your JavaScript skills?",
    "action_text": "Read the article",
    "icon":"",
    "img":"./pages/javascript-under-pressue/images/icons8-javascript-240.png",
    "img_alt":"Javascript Icon",
    "target":"./pages/javascript-under-pressue"
 }
]

const DeckBuilder = {
  MakeCard:(Card=null)=>{
    if (Card === null)
      return;
      /* TEMPLATE
      {
        "title":"",
        "text":"",
        "action_text":"",
        "icon":"",
        "target":""
      }
      */

    let card = document.createElement("div")
    card.classList.add("card","m-3","front-page-card", "d-flex")

    if (Card.img !== ""){
      let card_img = document.createElement("img")
      card_img.classList.add("card-img-top")
      card_img.alt = Card.img_alt
      card_img.src = Card.img
      card.append(card_img)
    }

    let card_body = document.createElement("div")
    card_body.classList.add("card-body")

    let card_title = document.createElement("h5")
    card_title.classList.add("card-title")
    card_title.innerHTML = Card.title
    card_body.append(card_title)

    let card_text = document.createElement("p")
    card_text.classList.add("card-text")
    card_text.innerHTML = Card.text
    card_body.append(card_text)

    let card_action_btn = document.createElement("a")
    card_action_btn.classList.add("btn","btn-primary")
    card_action_btn.href = Card.target
    card_action_btn.innerHTML = Card.action_text
    card_body.append(card_action_btn)

    card.append(card_body);
    document.querySelector("#deck").append(card)

  }
}


document.addEventListener("DOMContentLoaded", (e)=>{
  for (let card of CardsInMyHand)
    DeckBuilder.MakeCard(card)
  BuildTopNavBar()
})