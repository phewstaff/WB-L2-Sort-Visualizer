import {
  disableNewArrayBtn,
  disableSizeSlider,
  disableSortingBtns,
  enableNewArrayBtn,
  enableSizeSlider,
  enableSortingBtns,
  waitforme,
  swap,
  delay,
} from "./sorting";

async function partitionLomuto(ele, l, r) {
  let i = l - 1;
  // выделить цвет для опорного элемента
  ele[r].style.background = "red";
  for (let j = l; j <= r - 1; j++) {
    // выделить текущий элемент цветом
    ele[j].style.background = "yellow";
    // небольшая задержка для наглядности
    await waitforme(delay);

    if (parseInt(ele[j].style.height) < parseInt(ele[r].style.height)) {
      i++;
      swap(ele[i], ele[j]);
      // выделить цвет
      ele[i].style.background = "orange";
      if (i != j) ele[j].style.background = "orange";
      // небольшая задержка для наглядности
      await waitforme(delay);
    } else {
      // выделить цвет, если не меньше опорного
      ele[j].style.background = "pink";
    }
  }
  i++;
  // небольшая задержка для наглядности
  await waitforme(delay);
  swap(ele[i], ele[r]); // высота опорного элемента
  // выделить цвет
  ele[r].style.background = "pink";
  ele[i].style.background = "green";

  // небольшая задержка для наглядности
  await waitforme(delay);

  // выделить цвет
  for (let k = 0; k < ele.length; k++) {
    if (ele[k].style.background != "green") ele[k].style.background = "cyan";
  }

  return i;
}

async function quickSort(ele, l, r) {
  if (l < r) {
    let pivot_index = await partitionLomuto(ele, l, r);
    await quickSort(ele, l, pivot_index - 1);
    await quickSort(ele, pivot_index + 1, r);
  } else {
    if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
      ele[r].style.background = "green";
      ele[l].style.background = "green";
    }
  }
}

const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = ele.length - 1;
  disableSortingBtns();
  disableSizeSlider();
  disableNewArrayBtn();
  await quickSort(ele, l, r);
  enableSortingBtns();
  enableSizeSlider();
  enableNewArrayBtn();
});
