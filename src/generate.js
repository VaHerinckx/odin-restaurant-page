import {setAttributes, appendChildren} from './utils'

let createHeader = function() {
  let container = document.querySelector("#content")
  let buttons = document.createElement("div")
  let homeButton = document.createElement("button")
  let menuButton = document.createElement("button")
  let contactButton = document.createElement("button")
  let title = document.createElement("h1")
  title.innerHTML = "Casa de Poof"
  buttons.classList.add("buttons")
  homeButton.classList.add("home", "button")
  menuButton.classList.add("menu", "button")
  contactButton.classList.add("contact", "button")
  homeButton.innerHTML = "HOME"
  menuButton.innerHTML = "MENU"
  contactButton.innerHTML = "CONTACT"
  appendChildren(buttons, [homeButton, menuButton, contactButton])
  appendChildren(container, [buttons, title])
}

let removeContent = function () {
  let container = document.querySelector("#content")
  while (container.firstChild) {
    container.removeChild(container.lastChild);
    }
  }

export {createHeader,
        removeContent};
