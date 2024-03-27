window.addEventListener('DOMContentLoaded', function () {
  //==== html document 요소가 모두 로드된 후 실행될 코드 : gsap가 자체적으로 생성하는 요소를 제어하기 위한 코드

  // 1. 커서 효과
  const cursor = $('#cursor');

  $(document).on('mousemove', function (e) {
    gsap.to(cursor, {
      left: e.pageX - cursor.width() * 0.5,
      top: e.pageY - cursor.height() * 0.5,
      ease: 'power4.out',
      duration: 0.9,
    });
  });

  // 2. 헤더 애니메이션 효과
  $('.cursor_effect')
    .mouseenter(function () {
      gsap.to('.dot', 0.5, { scale: 1, background: 'transparent' });
    })
    .mouseleave(function () {
      gsap.to('.dot', 0.5, { scale: 0.15, background: '#4274ff' });
    });

  $('#header, #menu .menu_header')
    .mouseenter(function () {
      $(this).addClass('on');
    })
    .mouseleave(function () {
      $(this).removeClass('on');
    });

  $('#header .ham').click(function () {
    $('#menu').fadeToggle().toggleClass('on');

    // side image move half left and right
    const sideImgW = $('.star div:nth-child(1)').width();
    $('.side').css('width', `calc(100% + ${sideImgW}px)`);
  });

  $('#menu .menu_header .ham').click(function () {
    $('#menu').fadeToggle().toggleClass('on');
  });
});
