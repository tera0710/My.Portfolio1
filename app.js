const text = document.querySelector(".jump");
const chars = text.textContent.split(""); // ① テキストを1文字ずつ分解
text.textContent = ""; // ② 元のテキストを消す

chars.forEach((char, i) => { // ③ 文字ごとに処理
  const span = document.createElement("span"); // ④ spanを作る
  span.textContent = char; // ⑤ spanの中身に文字を入れる
  span.style.animationDelay = `${i * 0.1}s`; // ⑥ 遅延を設定
  text.appendChild(span); // ⑦ h1の中に追加
});
    

const targets = document.querySelectorAll('.fadein');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.3
});

targets.forEach(el => observer.observe(el));



const btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // クラスの付け外しでスライド
});

