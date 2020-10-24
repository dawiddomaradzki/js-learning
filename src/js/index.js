import '../scss/main.scss';
(function ($) {
  $("nav li").click(function () {
    $(this).addClass("active").siblings("li").removeClass("active");
    $("section:nth-of-type(" + $(this).data("rel") + ")")
      .stop()
      .fadeIn(200, "linear")
      .siblings("section")
      .stop()
      .fadeOut(200, "linear");

  });
})(jQuery);

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')






