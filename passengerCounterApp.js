// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the counter-el in the HTML to reflect the new count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}
