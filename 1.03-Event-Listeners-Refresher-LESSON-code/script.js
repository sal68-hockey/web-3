
function render (html) {
  document.getElementById('out').innerHTML = html
}


let clickCount = 0
document.getElementById('btnClick').addEventListener('click', () => {
  clickCount++
  render(`<p>Click the card to start counting! ${clickCount}</p>`)
})






const kbkey = document.getElementById('kbkey')
const kbcode = document.getElementById('kbcode')
document.addEventListener('keydown', (e) => {
  kbkey.textContent = e.key;
  kbcode.textContent = e.code;
});





document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
})


const dblcard = document.getElementById('dblcard');
dblcard .addEventListener('dblclick', () => {
  dblcard .classList.toggle('activated');
  const state = dblcard.classList.contains('activated') ? 'ON' : 'OFF';
  render(`<p>Double-click the card to toggle highlight! State: ${state}</p>`);
});
const progressBar = document.getElementById("scrollProgressBar");

function updateScrollProgress() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrolled}%`;
}


window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("load", updateScrollProgress);





  // Option B — Scroll Progress Bar
  // - Add a small Bootstrap progress bar element at the very top of the page
  // - Select the inner bar element
 //  - Write a function that calculates % scrolled
 //    (current scroll position ÷ total scrollable height)
//   - Update the width of the bar with that percentage
  // - Run this function when the page loads and on every scroll event

  