import './styles.css';
import generateHomeContent from './home';
import generateContactContent from './contact';
import generateMenuContent from './menu';

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("home")) {
    generateHomeContent()
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu")) {
    generateMenuContent()
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("contact")) {
    generateContactContent()
  }
});

generateHomeContent()
