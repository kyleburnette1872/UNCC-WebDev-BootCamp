var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add event listener to increment button
// It's done when a user clicks on the increment button
// and the count is increased by `1`.
incrementEl.addEventListener("click", function () {
  count++;
  setCounterText();
});

// TODO: Add event listener to decrement button
decrementEl.addEventListener("click", function () {
  if (count > 0) {
    count--;
    setCounterText();
  }
});
