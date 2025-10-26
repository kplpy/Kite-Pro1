window.addEventListener('scroll', () => {
  const triggerPoint = 500;
  if (window.scrollY > triggerPoint) {
    document.body.classList.add('change-bg');
  } else {
    document.body.classList.remove('change-bg');
  }
});
