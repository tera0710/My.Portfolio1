const els = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  els.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.7) {
      el.classList.add('show');
    }
  });
});

targets.forEach(el => observer.observe(el));



const btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // クラスの付け外しでスライド
});