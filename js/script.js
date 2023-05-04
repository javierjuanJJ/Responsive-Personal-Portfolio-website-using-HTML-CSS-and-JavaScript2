// Header toggle

let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: [
        'Front-End Developer!',
        'Freelancer!',
        'UI Designer!',
        'Youtuber!',
    ],
    typedpeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true

});

// Active link on scroll

// Get all links
let navLinks = document.querySelectorAll('nav ul li a');
console.log(navLinks);

// Get all selections
let sections = document.querySelectorAll('section');
console.log(sections);

window.addEventListener('scroll', function () {
   const scrollPos = this.window.scrollY;
   sections.forEach(section => {
      if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
          navLinks.forEach(link => {
              link.classList.remove('active');
              if (section.getAttribute('id') === link.getAttribute('href').substring(1)){
                  link.classList.add('active');
              }
          });
      }
   });
});