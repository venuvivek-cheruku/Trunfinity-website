createCarousel(
  ".bg-slider",
  ".bg-slide",
  ".slider-one--arrow-left",
  ".slider-one--arrow-right",
  {
    endless: true,
    autoplay: true,
    autoplaySpeed: 15000,
    arrowButtons: false,
    touchSwipe: false,
    mouseDrag: true,
    hoverSwipe: false,
    cursorArrows: false,
    keyboardKeys: true,
    dynamicDots: false,
    autoplayPauseOnHover: false,
    resetOnInteraction: true,
    sliderVertical: false,
  }
);

//! know Issues

//endless bug needs to be fixed
// Drag is not working properly
//Dot needs to be fixed with index
//fix vertical scrolling issue with transition
