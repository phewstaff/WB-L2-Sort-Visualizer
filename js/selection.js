async function selection() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; i++) {
    let min_index = i;
    // Изменить цвет позиции для обмена с следующим минимумом
    ele[i].style.background = "blue";
    for (let j = i + 1; j < ele.length; j++) {
      // Изменить цвет для текущего сравнения (с учетом min_index)
      ele[j].style.background = "red";

      await waitforme(delay);
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index !== i) {
          // новый min_index найден, поэтому вернуть предыдущий цвет min_index в нормальное состояние
          ele[min_index].style.background = "cyan";
        }
        min_index = j;
      } else {
        // если текущее сравнение больше, чем min_index, вернуть его в нормальное состояние
        ele[j].style.background = "cyan";
      }
    }
    await waitforme(delay);
    swap(ele[min_index], ele[i]);
    // вернуть цвет индекса минимального элемента в нормальное состояние, так как он был заменен
    ele[min_index].style.background = "cyan";
    // изменить цвет отсортированных элементов на зеленый
    ele[i].style.background = "green";
  }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener("click", async function () {
  disableSortingBtns();
  disableSizeSlider();
  disableNewArrayBtn();
  await selection();
  enableSortingBtns();
  enableSizeSlider();
  enableNewArrayBtn();
});
