$(document).ready(function () {
  // Smooth scroll
  $('nav a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800);
    }
  });

  // Show message on Get Started button
  $('.cta-button').on('click', function (e) {
    e.preventDefault();
    alert('Thanks for your interest! Our counselor will contact you soon.');
  });
});

