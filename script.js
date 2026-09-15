const toggle = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('news-theme');
if (savedTheme === 'inverted') document.body.classList.add('inverted');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('inverted');
  localStorage.setItem('news-theme', document.body.classList.contains('inverted') ? 'inverted' : 'default');
});
const stories = document.querySelectorAll('.story');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  });
}, { threshold: 0.12 });
stories.forEach((story) => observer.observe(story));

// Keep every report readable if a browser delays or skips intersection events.
window.setTimeout(() => stories.forEach((story) => story.classList.add('visible')), 1200);
