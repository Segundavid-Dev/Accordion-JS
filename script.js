"use script";

// getting selectors
const accordionMain = document.querySelectorAll(".accordion--main");
const accordionPanel = document.querySelectorAll(".accordion--panel");
const showPlusSvg = document.querySelectorAll(".accordion--side--img");
const showMinusSvg = document.querySelectorAll(".minus--svg");
console.log(showMinusSvg);

// looping through each nodeList
for (let i = 0; i < accordionMain.length; i++) {
  accordionMain[i].addEventListener("click", function () {
    console.log(`Accordion clicked`);

    // toggle show accordion content
    accordionPanel[i].classList.toggle("show");

    // toggle plus icon and minus icon
    showPlusSvg[i].classList.toggle("hidden");
    showMinusSvg[i].classList.toggle("show");
  });
}
