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