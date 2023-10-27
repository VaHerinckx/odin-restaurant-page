import {setAttributes, appendChildren} from './utils'
import {createHeader, removeContent} from './generate'

let container = document.querySelector("#content")

let generateContactContent = function () {
  removeContent();
  let chefSection = document.createElement("div")
  let imgCropper = document.createElement("div")
  let picture = document.createElement("img")
  let chefSpeak = document.createElement("span")
  let contactSection = document.createElement("div")
  let text1 = document.createElement("span")
  let text2 = document.createElement("span")
  let text3 = document.createElement("span")
  createHeader()
  chefSection.className = "chef-section"
  imgCropper.className = "img-cropper"
  contactSection.className ="contact-section"

  chefSpeak.innerHTML = "Hi, chef Poof speaking here! <br /> <br /> I'll be in charge of your meal should you decide to book a table at our little heaven. More information on how to contact me and my team below. "
  text1.innerHTML = "Phone-number: XXX"
  text2.innerHTML = "Email: XXX@XXX.com"
  text3.innerHTML = "Address: XYZ"
  setAttributes(picture, {"src" : "../src/imgs/profile-pic.jpg",
                          "alt" : "Chef Poof",
                          "class" : "profile-picture"})
  imgCropper.appendChild(picture)
  appendChildren(chefSection, [imgCropper, chefSpeak])
  appendChildren(contactSection, [text1, text2, text3])
  appendChildren(container, [chefSection, contactSection])
}

export default generateContactContent;
