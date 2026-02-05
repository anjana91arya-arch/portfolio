window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if(skillTop < windowHeight - 50) {
      skill.style.width = skill.dataset.progress;
    }
  });
});
