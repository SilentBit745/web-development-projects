
const orbit = document.querySelector('.orbit');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  orbit.style.transform = `rotate(${scroll * 0.5}deg)`;
});

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('selected');
  });
});
