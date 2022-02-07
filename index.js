let navbar = document.querySelector('.navbar-menu');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
    navbar.classList.toggle('close');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}



let search = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('show');
}

document.querySelector('#close-search').onclick = () => {
    search.classList.remove('show');
}

//Swiper-Js slider javascript code
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
});