const slider = document.getElementById("slider");
const positions = [
  [0, 0], [-100, 0], [-200, 0], [-300, 0],
  [-300, -100], [-300, -200], [-300, -300],
  [-200, -300], [-100, -300], [0, -300],
  [100, -300], [100, -200], [100, -100], [100, 0]
];
let current = 0;

function moveTo(index) {
  current = ((index % positions.length) + positions.length) % positions.length;
  const [x, y] = positions[current];
  slider.style.transform = `translate(${x}vw, ${y}vh)`;
}

document.getElementById("nextBtn").onclick = () => moveTo(current + 1);
document.getElementById("prevBtn").onclick = () => moveTo(current - 1);

window.onload = () => moveTo(0);

const bookStart = document.getElementById("bookStart");
let opened = false;
bookStart.addEventListener("mouseenter", () => {
  if (!opened) {
    bookStart.classList.remove("closed");
    bookStart.classList.add("open");
    opened = true;
  }
});

const bookFinal = document.getElementById("bookFinal");
let isClosed = false;
bookFinal.addEventListener("mouseenter", () => {
  if (!isClosed) {
    bookFinal.classList.remove("open");
    bookFinal.classList.add("closed");
    isClosed = true;
  }
});

window.addEventListener('load', function () {
  setTimeout(() => {
    const flont = document.querySelector('.flont-bottom');
    const text = document.querySelector('.center-text');
    const afterContent = document.querySelector('.after-content');

    if (flont && text && afterContent) {
      flont.classList.add('fade-out');   // ← 画像もフェードアウト
      text.classList.add('fade-out');    // ← テキストもフェードアウト

      // 完全に消えたあと、新要素を表示
      setTimeout(() => {
        afterContent.classList.add('show');
      }, 1000);
    }
  }, 5000); // 5秒後に実行
});
