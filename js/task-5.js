function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyPage = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const changeColor = () => {
  const randomColor = getRandomHexColor();
  bodyPage.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}

changeColorBtn.addEventListener('click', changeColor);

