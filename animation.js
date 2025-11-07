document.addEventListener('DOMContentLoaded', () => {
  const options = {};
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('find', entry);
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  const targets = document.querySelectorAll('.anim');

  targets.forEach(target => observer.observe(target));
});
