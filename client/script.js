let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", () => {
  count++;
  updateCounter();
});

document.getElementById("reset").addEventListener("click", () => {
  if (count > 0) {
    count = 0;
    updateCounter();
  } else alert("Counter is already at 0.");
});

document.getElementById("decrement").addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  } else alert("Counter is already at 0.");
});

function updateCounter() {
  counterDisplay.textContent = count;
}
