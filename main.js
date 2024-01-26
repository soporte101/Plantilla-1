const menu = document.getElementById('menu'),
        btnMenu = document.getElementById("btnMenu"),
        btnClose = document.getElementById("btnClose");



btnMenu.addEventListener('click', () =>{

    menu.classList.toggle("translate-x-[-100%]");

    btnMenu.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");

    document.body.style.overflow = "hidden";


});

btnClose.addEventListener('click', () =>{

    menu.classList.toggle("translate-x-[-100%]");

    btnMenu.classList.toggle("hidden");
    btnClose.classList.toggle("hidden");

    document.body.style.overflow = "auto";

});

// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.getElementById('navbar');

//     window.addEventListener('scroll', function () {
//         // Añadir clase 'fixed' al hacer scroll hacia abajo
//         if (window.scrollY > 0) {
//             navbar.classList.add('fixed');
//         } else {
//             // Remover clase 'fixed' al volver al inicio
//             navbar.classList.remove('fixed');
//         }
//     });
// });

var swiperSlider = new Swiper(".sliderHome", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next-slider",
      prevEl: ".swiper-button-prev-slider",
    },
});

var swiperIconos = new Swiper(".swiperIconos", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next-iconos",
        prevEl: ".swiper-button-prev-iconos",
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
  
        340: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
      },
});

var swiperNoticias = new Swiper(".swiperNoticias", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
  
        340: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
      },
});