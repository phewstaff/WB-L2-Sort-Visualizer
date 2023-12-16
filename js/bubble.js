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

async function bubble() {
  const el = document.querySelectorAll(".bar");
  for (let i = 0; i < el.length - 1; i++) {
    for (let j = 0; j < el.length - i - 1; j++) {
      el[j].style.background = "blue";
      el[j + 1].style.background = "indigo";
      if (parseInt(el[j].style.height) > parseInt(el[j + 1].style.height)) {
        await waitforme(delay);
        swap(el[j], el[j + 1]);
      }
      el[j].style.background = "cyan";
      el[j + 1].style.background = "cyan";
    }
    el[el.length - 1 - i].style.background = "green";
  }
  el[0].style.background = "green";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
  disableSortingBtns();
  disableSizeSlider();
  disableNewArrayBtn();
  await bubble();
  enableSortingBtns();
  enableSizeSlider();
  enableNewArrayBtn();
});
