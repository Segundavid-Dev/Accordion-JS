"use script";

// getting selectors
const accordionMain = document.querySelectorAll(".accordion--main");
const accordionPanel = document.querySelectorAll(".accordion--panel");
// console.log(accordionMain);

// looping through each nodeList
for (let i = 0; i < accordionMain.length; i++) {
  accordionMain[i].addEventListener("click", function () {
    // selecting each nodeList
    accordionPanel[i].classList.toggle("hidden");
    // toggle each panel by dynamically adding and removing the hidden class

    // change svg image
  });
}
