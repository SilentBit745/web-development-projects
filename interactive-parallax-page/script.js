
const stars = document.querySelector('.stars');
const moon = document.querySelector('.moon');
const mountains = document.querySelector('.mountains');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  stars.style.transform = `translateY(${scroll * 0.15}px)`;
  moon.style.transform =
    `translateY(${scroll * 0.35}px)`;
  mountains.style.transform =
    `translateY(${scroll * 0.10}px)`;
});
