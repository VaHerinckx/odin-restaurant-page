import {setAttributes, appendChildren} from './utils'
import {createHeader, removeContent} from './generate'

let generateHomeContent = function () {
  removeContent();
  let container = document.querySelector("#content")
  let picture = document.createElement("img")
  let text1 = document.createElement("span")
  let text2 = document.createElement("span")
  createHeader()
  text1.innerHTML = "This is a house of delicacies coming from all over the world. Your mouth is not going to believe how good our dishes are!"
  text2.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vitae fugiat dicta velit tempora sapiente ex, unde beatae deserunt excepturi quaerat modi, harum incidunt repudiandae impedit, libero commodi eos fugit!"
  setAttributes(picture, {"src" : "../src/imgs/blabjia.jpg",
                          "alt" : "The house of Poof"})
  appendChildren(container, [picture, text1, text2])
}

export default generateHomeContent;
