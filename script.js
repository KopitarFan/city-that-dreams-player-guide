const links = [...document.querySelectorAll('.nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
const setActive = () => {
  const y = window.scrollY + 160;
  let current = '#home';
  for (const section of sections) if (section.offsetTop <= y) current = '#' + section.id;
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === current));
};
window.addEventListener('scroll', setActive, {passive:true});
setActive();
