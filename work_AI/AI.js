const els = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  els.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.7) {
      el.classList.add('show');
    }
  });
});



const btn = document.getElementById("menu_btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show"); // クラスの付け外しでスライド
});