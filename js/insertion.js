import {
  disableNewArrayBtn,
  disableSizeSlider,
  disableSortingBtns,
  enableNewArrayBtn,
  enableSizeSlider,
  enableSortingBtns,
  waitforme,
  delay,
} from "./sorting";

async function insertion() {
  const ele = document.querySelectorAll(".bar");
  // color
  ele[0].style.background = "green";
  for (let i = 1; i < ele.length; i++) {
    let j = i - 1;
    let key = ele[i].style.height;
    // color
    ele[i].style.background = "blue";

    await waitforme(delay);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      // color
      ele[j].style.background = "blue";
      ele[j + 1].style.height = ele[j].style.height;
      j--;

      await waitforme(delay);

      // color
      for (let k = i; k >= 0; k--) {
        ele[k].style.background = "green";
      }
    }
    ele[j + 1].style.height = key;
    // color
    ele[i].style.background = "green";
  }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener("click", async function () {
  disableSortingBtns();
  disableSizeSlider();
  disableNewArrayBtn();
  await insertion();
  enableSortingBtns();
  enableSizeSlider();
  enableNewArrayBtn();
});
