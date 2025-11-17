const btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // クラスの付け外しでスライド
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