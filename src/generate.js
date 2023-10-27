import {setAttributes, appendChildren} from './utils'

let generateContent = function () {
  let container = document.querySelector("#content")
  let title = document.createElement("h1")
  let picture = document.createElement("img")
  let text1 = document.createElement("span")
  let text2 = document.createElement("span")
  title.innerHTML = "Casa de Poof"
  text1.innerHTML = "This is a house of delicacies coming from all over the world. Your mouth is not going to believe how good our dishes are!"
  text2.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vitae fugiat dicta velit tempora sapiente ex, unde beatae deserunt excepturi quaerat modi, harum incidunt repudiandae impedit, libero commodi eos fugit!"
  setAttributes(picture, {"src" : "../src/imgs/blabjia.jpg",
                          "alt" : "The house of Poof"})
  appendChildren(container, [title, picture, text1, text2])
}

export default generateContent;
