document.querySelector('.header__menu--switch').addEventListener('click', function () {
  const nav = document.querySelector('.header__nav');
  const img = this.querySelector('img');

  // Toggle the navigation open class
  nav.classList.toggle('header__nav--open');


  // Toggle image source
  if (nav.classList.contains('header__nav--open')) {
    img.src = "../images/close.svg";
  } else {
    img.src = "../images/menu.svg";
  }
});


window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  
  if (window.scrollY > 0) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
});


// Start Animations
let lastScrollY = window.scrollY;

const targets = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    const scrollingDown = window.scrollY > lastScrollY;

    if (entry.isIntersecting) {
      // Remove any old classes before adding new
      el.classList.remove('fade-in-up-start', 'fade-in-down-start', 'fade-in-up', 'fade-in-down');

      // Add the start class (with translateY)
      if (scrollingDown) {
        el.classList.add('fade-in-down-start');
        requestAnimationFrame(() => el.classList.add('fade-in-down'));
      } else {
        el.classList.add('fade-in-up-start');
        requestAnimationFrame(() => el.classList.add('fade-in-up'));
      }
    } else {
      // Reset when out of view so it can animate again later
      el.classList.remove('fade-in-up', 'fade-in-down');
      el.classList.remove('fade-in-up-start', 'fade-in-down-start');
    }
  });

  lastScrollY = window.scrollY;
}, {
  threshold: 0.1
});

targets.forEach(target => {
  observer.observe(target);
});
