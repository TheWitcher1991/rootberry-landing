$(document).ready(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        wrapper: ".gs",
        content: ".content",
        smooth: 1.5,
        effects: true,
      });
    }
  
    $("a[href*='#']").on("click", function (e) {
      e.preventDefault();
  
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          777
        );
  
      return false;
    });
  });