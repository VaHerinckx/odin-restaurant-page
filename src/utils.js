//Functions used to quickly create elements in JS and add attributes
const setAttributes = function (element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
}

const appendChildren = function (element, children) {
  children.forEach(child => {
      element.appendChild(child);
  });
}

export {
  setAttributes,
  appendChildren
};
