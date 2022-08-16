$(function () {
  $('#fullpage').fullpage({
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopHorizontal: false,
    anchors: ['main', 'p01', 'p02', 'p03', 'p04', 'p05', 'p06'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Main', '홍삼이야기', '홍삼원', '에브리타임', '제품', '가맹문의'],

    afterLoad: function (origin, destination) {
      if (destination.anchor != 'main') {
        $('.Header').addClass('on')
      } else {
        $('.Header').removeClass('on')
      }
      destination.anchor == 'p02' ? $('.Won').addClass('on') : $('.Won').removeClass('on');
      destination.anchor == 'p03' ?
        $('.Every').addClass('on') && $('#fp-nav ul li').addClass('on')
        : $('.Every').removeClass('on') && $('#fp-nav ul li').removeClass('on');

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


  $('.products_slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
  })

  $('.products_slide').slick('afterChange', function (e, s, c) {
    console.log(s)``
  })

})