$(function () {
  $('#fullpage').fullpage({
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopHorizontal: false,

    anchors: ['p01', 'p02', 'p03', 'p04', 'p05', 'P06'],

    afterLoad: function (origin, destination) {

      destination.anchor == 'p03' ? $('.Won').addClass('on') : $('.Won').removeClass('on')
      
    }

  });

  //슬라이드 마우스휠로 움직이게
  $(".Story").on("wheel", function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      fullpage_api.moveSlideLeft();
    }
    else {
      fullpage_api.moveSlideRight();
    }
  });

})