// функцияя для свапа двух колонок большей и меньшей
export function swap(el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

function disableElement(selector) {
  document.querySelector(selector).disabled = true;
}

function enableElement(selector) {
  document.querySelector(selector).disabled = false;
}

// Отключает кнопки сортировки, используемые в сочетании с enable, чтобы мы могли отключить их во время сортировки и включить кнопки после нее
export function disableSortingBtns() {
  disableElement(".bubbleSort");
  disableElement(".insertionSort");
  disableElement(".mergeSort");
  disableElement(".quickSort");
  disableElement(".selectionSort");
}

export function enableSortingBtns() {
  enableElement(".bubbleSort");
  enableElement(".insertionSort");
  enableElement(".mergeSort");
  enableElement(".quickSort");
  enableElement(".selectionSort");
}

export function disableSizeSlider() {
  disableElement("#arr_sz");
}

export function enableSizeSlider() {
  enableElement("#arr_sz");
}

export function disableNewArrayBtn() {
  disableElement(".newArray");
}

export function enableNewArrayBtn() {
  enableElement(".newArray");
}

// Искусственная задержка для наглядности и анимации
export function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let arraySize = document.querySelector("#arr_sz");

// Слушатель событий для обновления колонок на интерфейсе
arraySize.addEventListener("input", function () {
  createNewArray(parseInt(arraySize.value));
});

// Исходный ввод для функции waitforme (260 мс)

export let delay = 260;

// Выбор ползунка скорости из DOM
let delayElement = document.querySelector("#speed_input");

// Слушатель событий для обновления времени задержки
delayElement.addEventListener("input", function () {
  delay = 320 - parseInt(delayElement.value);
});

// Создание массива для хранения случайно сгенерированных чисел
let array = [];

// Вызов для отображения колонок при посещении сайта
createNewArray();

// Генерация массива
function createNewArray(noOfBars = 60) {
  // вызываем вспомогательную функцию для удаления старых колонок из DOM
  deleteChild();

  // создаем массив случайных чисел
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  const bars = document.querySelector("#bars");

  // создаем несколько элементов div с помощью цикла и добавляем класс 'bar col'
  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${array[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

// Вспомогательная функция для удаления всех предыдущих колонок, чтобы можно было добавить новые
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

// Выбор кнопки newArray из DOM и добавление слушателя событий
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  enableSortingBtns();
  enableSizeSlider();
  createNewArray(arraySize.value);
});
