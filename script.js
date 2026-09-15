const toggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('news-theme');
if (savedTheme === 'inverted') document.body.classList.add('inverted');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('inverted');
  localStorage.setItem('news-theme', document.body.classList.contains('inverted') ? 'inverted' : 'default');
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.story').forEach((story) => observer.observe(story));
