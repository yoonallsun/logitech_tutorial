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

  // Section 01 Scroll Animation
  let tit = gsap.timeline(); // to,from, fromTo 드으이 애니메이션 효과를 생성
  ScrollTrigger.create({
    animation: tit,
    trigger: '.trigger-this-1',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.8, // 마우스 이동후 .8초 정도 지연
  });

  tit
    .add('s1') // s1 이라는 이름을 지어서 첫번째 효과로 지정
    .to('.main_title_01', { opacity: 0, y: -100, duration: 4 }, 's1')

    .add('s2') // s2 이라는 이름을 지어서 첫번째 효과로 지정
    .to('.main_title_02', { opacity: 1, y: -50, duration: 4 }, 's2')
    .to('.main_title_02', { opacity: 0, y: -100, duration: 4 })

    .add('s3') // s3 이라는 이름을 지어서 첫번째 효과로 지정
    .to('.main_title_03', { opacity: 1, y: -50, duration: 4 }, 's3')
    .to('.main_title_03', { opacity: 0, y: -100, duration: 4 });

  gsap.to('.fix-this-1', {
    scrollTrigger: {
      trigger: '.trigger-this-1',
      start: 'top top', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      end: 'bottom bottom', // 앞의 값 : trigger에 적용되어 있는 요소의 위치, 뒤의 값 : 화면의 표시 위치
      scrub: true,
      pin: true, // trigger에 지정된 요소의 크기만큼 화면을 고정
      // markers: true,
    },
  });

  // Section 02 Animation
  gsap.to('#section02 .we', {
    scrollTrigger: {
      trigger: '.trigger-this-we',
      start: 'top top',
      end: '109.3% bottom',
      scrub: true,
      pin: true,
      // markers: true,
    },
  });

  gsap.to('#section02 .we img', {
    y: 250,
    scrollTrigger: {
      trigger: '#section02',
      start: '4000 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
    },
  });

  gsap.to('.fix-this-2', {
    scrollTrigger: {
      trigger: '.trigger-this-2',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  let sec02 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec02,
    trigger: '#section02',
    start: '500 top',
    end: 'bottom bottom',
    scrub: 1,
    // markers: true,
  });

  sec02.to('#section02 .left', { x: -1000, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .star03', { x: 1000, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .keyboard', { x: 2400, y: 0, rotation: 0 }, 0);

  sec02.to('#section02 .create', { x: 2300, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .title02', { x: 2100, y: 0, rotation: 0 }, 0);
  sec02.to('#section02 .connect', { x: 2200, y: 0, rotation: 0 }, 0);

  sec02.to('#section02 .al_s', { X: -500, y: -300, rotation: -55 }, 0); // 마지막 파라미터 0이 없으면 순차 실행
  sec02.to('#section02 .al_i', { X: -600, y: -700, rotation: -50 }, 0);
  sec02.to('#section02 .al_n', { X: -500, y: -1000, rotation: -40 }, 0);
  sec02.to('#section02 .al_c', { X: -600, y: -1300, rotation: -25 }, 0);
  sec02.to('#section02 .al_e', { X: -600, y: -1400, rotation: -5 }, 0);

  sec02.to('#section02 .no_1', { X: 100, y: -1300, rotation: 20 }, 0);
  sec02.to('#section02 .no_9', { X: 300, y: -1150, rotation: 40 }, 0);
  sec02.to('#section02 .no_8', { X: 500, y: -700, rotation: 55 }, 0);
  sec02.to('#section02 .no_12', { X: 400, y: -200, rotation: 55 }, 0);

  sec02.to('#section02 .underline', { X: 0, y: 900, opacity: 0 }, 0);

  // section 03 blue box active when added class on
  gsap.to('#section03', {
    scrollTrigger: {
      trigger: '#section03',
      start: 'top top',
      scrub: true,
      toggleClass: 'on',
      // markers: true,
    },
  });

  // section 04 overlay opacity animation
  gsap.to('.fix-this-4', {
    scrollTrigger: {
      trigger: '.trigger-this-4',
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      scrub: true,
      // markers: true,
    },
  });

  gsap.to('.overlay', {
    opacity: 1,
    scrollTrigger: {
      trigger: '#section04',
      start: '2000 top',
      end: 'bottom bottom',
      scrub: true,
      // markers: true,
    },
  });

  // section 04 bottom text image animation
  let sec04 = gsap.timeline();
  ScrollTrigger.create({
    animation: sec04,
    trigger: '#section04',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    markers: true,
  });

  sec04.to('#section04 .title_w', { x: -5500 }, 0);
  sec04.to('#section04 .title_b', { x: 6000 }, 0);
  sec04.to('#section04 .bg', { scale: 1.2 }, 0);

  sec04.to('#section04 .img01', { y: -4000 }, 0);
  sec04.to('#section04 .img02', { y: -3500 }, 0);
  sec04.to('#section04 .img03', { y: -3800 }, 0);
  sec04.to('#section04 .img04', { y: -3600 }, 0);
  sec04.to('#section04 .img05', { y: -3500 }, 0);
  sec04.to('#section04 .img06', { y: -3400 }, 0);

  const imgs = document.querySelectorAll('#section04 .visual_container > div');

  imgs.forEach((img, idx) => {
    let sc05 = gsap.timeline();

    ScrollTrigger.create({
      animation: sc05,
      trigger: img,
      start: '-500px top',
      end: 'bottom bottom',
      scrub: 1.8,
      // markers: true,
    });
    sc05.fromTo(
      img,
      {
        x: idx % 2 === 0 ? -300 : 300,
        opacity: 0,
        ease: 'linear',
      },
      { x: 0, ease: 'linear', opacity: 1 }
      // '+=10'
      // idx / 2
      // idx * 0.5
    );
  });
});
