var track = document.getElementById('sliderTrack');
var interval = 3000; 
var itemWidth = track.querySelector('.category-col').offsetWidth;

setInterval(() => {
  track.style.transform = `translateX(-${itemWidth}px)`;

  setTimeout(() => {
    track.appendChild(track.firstElementChild);
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    setTimeout(() => {
      track.style.transition = 'transform 1s ease-in-out';
    }, 50);
  }, 1000);

}, interval);

const coupon = document.getElementById('coupon');

    coupon.addEventListener('click', () => {
        navigator.clipboard.writeText(coupon.textContent).then(() => {
            coupon.textContent = 'COPIED!';
            coupon.classList.add('copied');
            setTimeout(() => {
                coupon.textContent = 'COUPON25';
                coupon.classList.remove('copied');
            }, 2000);
        });
    });

  // Init Swiper
var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 }
  }
});

  // Init Bootstrap Popovers
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(function(el){
    new bootstrap.Popover(el, { trigger: 'hover', placement: 'left' });
  });




  // Countdown Timer (24 hours)
  var endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

  function updateCountdown() {
    var now = new Date().getTime();
    var distance = endTime - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = "00 : 00 : 00";
      clearInterval(timerInterval);
      return;
    }

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("countdown").innerHTML = hours + " : " + minutes + " : " + seconds;
  }

  var timerInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

document.querySelectorAll('.newarrivals-section [data-bs-toggle="popover"]').forEach(el => {
    new bootstrap.Popover(el);
  });

// تغيير السلايد عند الضغط على صورة صغيرة
function hoodieChangeSlide(index) {
    var carousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('hoodieCarousel'));
    carousel.to(index);
}

// دوران دايرة الخصم أول ما يظهر السلايدر
window.addEventListener("scroll", function() {
    let discount = document.getElementById("hoodieDiscount");
    let section = document.getElementById("hoodieCarousel");
    let sectionTop = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if(sectionTop < windowHeight - 100){
        discount.classList.add("hoodie-rotate");
    }
});
