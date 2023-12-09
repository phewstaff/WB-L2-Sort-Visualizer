// Генерация массива
function createNewArray(noOfBars = 60) {
  // вызываем вспомогательную функцию для удаления старых полос из DOM
  deleteChild();

  // создаем массив случайных чисел
  array = [];
  for (let i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }
  console.log(array);

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

// Вспомогательная функция для удаления всех предыдущих полос, чтобы можно было добавить новые
function deleteChild() {
  const bar = document.querySelector("#bars");
  bar.innerHTML = "";
}

// Выбор кнопки newArray из DOM и добавление слушателя событий
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
  console.log("Из newArray " + arraySize.value);
  console.log("Из newArray " + delay);
  enableSortingBtn();
  enableSizeSlider();
  createNewArray(arraySize.value);
});
