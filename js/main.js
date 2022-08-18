$(function () {
  $('#fullpage').fullpage({
    controlArrows: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    responsiveWidth: 768,
    loopHorizontal: false,
    anchors: ['main', 'p01', 'p02', 'p03', 'p04', 'p05', 'footer'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['Main', '홍삼이야기', '홍삼정', '에브리타임', '제품', '가맹문의', 'Bottom'],
    afterSlideLoad: function (section, origin, destination, direction) {
      $('.Story .fp-slides figure').eq(destination.index).addClass('on').siblings().removeClass('on')
    },

    afterLoad: function (origin, destination) {
      if (destination.anchor != 'main') {
        $('.Header').addClass('on')
      } else {
        $('.Header').removeClass('on')
      };

      destination.anchor == 'p02' ? $('.Jung').addClass('on') : $('.Jung').removeClass('on');
      destination.anchor == 'p03' ? $('.Every').addClass('on') : $('.Every').removeClass('on');
      destination.anchor == 'p05' || destination.anchor == 'footer' ? $('.Join').addClass('on') : $('.Join').removeClass('on');
      if (destination.anchor == 'p02' || destination.anchor == 'p03' || destination.anchor == 'p04' || destination.anchor == 'p05' || destination.anchor == 'footer') {
        $('#fp-nav ul li').addClass('on')
      } else {
        $('#fp-nav ul li').removeClass('on')
      }

      if (destination.anchor == 'p02') {
        var memberCountConTxt = 120;
        $({ val: 0 }).animate({ val: memberCountConTxt }, {
          duration: 3000,
          step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
          },
          complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
          }
        });
      } else {
        var memberCountConTxt = 0;
        $({ val: 0 }).animate({ val: memberCountConTxt }, {
          duration: 3000,
          step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
          },
          complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".memberCountCon").text(num);
          }
        });
      }
    }
  });

  // if($(window).width() <= 768){
  //   var g_interval;
  //   $('#fullpage').fullpage({
  //     afterLoad: function (origin, destination, direction) {
  //       clearInterval(g_interval);

  //       // 1000 milliseconds lapse
  //       const lapse = 1000;

  //       if(destination.item.querySelectorAll('.fp-slides').length){
  //         g_interval = setInterval(function () {
  //           fullpage_api.moveSlideRight();
  //         }, lapse);
  //       }
  //     }
  //   })
  // }

  //슬라이드 마우스휠로 움직이게
  $(".Story").on("wheel", function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
      fullpage_api.moveSlideLeft();
    }
    else {
      fullpage_api.moveSlideRight();
    }
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }


  $('.products_slide').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
    ]
  })

  $('.Product .control .xi-angle-left').on('click', function () {
    $('.products_slide').slick('slickPrev')
  });

  $('.Product .control .xi-angle-right').on('click', function () {
    $('.products_slide').slick('slickNext')
  });

  $('.products_slide').on('init afterChange', function (e, s, c) {
    console.log(s, c)
    $('.Product .control span').text(c + 1 + " / " + s.slideCount);
  })

  $('.mbtn i').on('click', function (e) {
    e.preventDefault();
    $('.Header .Gnb').toggleClass('on')
    if ($('.mbtn i:nth-child(1)').hasClass('on')) {
      $('.mbtn i:nth-child(1)').removeClass('on').siblings().addClass('on')
    } else {
      $('.mbtn i:nth-child(2)').removeClass('on').siblings().addClass('on')
    }
  })



})