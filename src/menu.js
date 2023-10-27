import {setAttributes, appendChildren} from './utils'
import {createHeader, removeContent} from './generate'

let container = document.querySelector("#content")

let generateMenuItem = function(menu_container, img_src, item_name, item_desc, item_price) {
  let menuItem = document.createElement("div");
  let itemImg = document.createElement("img");
  let itemTitle = document.createElement("span");
  let itemDesc = document.createElement("span");
  let itemPrice = document.createElement("span");
  menuItem.className = "menu-item";
  itemImg.className = "menu-item-picture";
  itemTitle.className = "menu-item-title";
  itemDesc.className = "menu-item-desc";
  itemPrice.className ="menu-item-price";
  setAttributes(itemImg, {"src" : img_src,
                          "alt" : item_name});
  itemTitle.innerHTML = item_name;
  itemDesc.innerHTML = item_desc;
  itemPrice.innerHTML = item_price;
  appendChildren(menuItem, [itemImg, itemTitle, itemDesc, itemPrice]);
  menu_container.appendChild(menuItem);
}

let generateMenuContent = function () {
  removeContent();
  createHeader()
  let menuContainer = document.createElement("div")
  let menuTitle = document.createElement("span")
  menuTitle.innerHTML = "On today's menu..."
  menuContainer.className = "menu-items"
  appendChildren(container, [menuTitle, menuContainer])
  generateMenuItem(menuContainer,
                   "../src/imgs/zajiang.jpg",
                   "Zajiang noodles",
                   "A tasty dish that is beloved by all in Taiwan!",
                   "5$")
  generateMenuItem(menuContainer,
                   "../src/imgs/octopus.jpg",
                   "Weird octopus dish",
                   "A strange dish, only encountered in small restaurants on the Taiwanese seaside!",
                   "10$")
  generateMenuItem(menuContainer,
                   "../src/imgs/glace.jpg",
                   "Icey dish",
                   "A dish covered with ice, but what's underneath? The answer might surprise you!",
                   "7$")
  generateMenuItem(menuContainer,
                   "../src/imgs/riz-legumes.jpg",
                   "The chef's favorite",
                   "Cooked with love, the chef presents his specialty: rice, vegetables and an egg!",
                   "15$")
}

export default generateMenuContent;
