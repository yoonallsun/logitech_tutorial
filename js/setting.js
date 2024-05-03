// 변수 선언
let container;
let stage;

// DOM이 완전히 로드된 후에 실행되는 함수
window.addEventListener('DOMContentLoaded', function () {
  // ScrollTrigger 플러그인을 gsap에 등록
  gsap.registerPlugin(ScrollTrigger);

  // #container 요소를 stage 변수에 할당
  stage = document.querySelector('#container');
  // Scrollbar를 초기화하고 container 변수에 할당
  container = Scrollbar.init(stage, {
    damping: 0.1, // 스크롤 속도 감쇠 비율
    delegateTo: document, // 스크롤 이벤트를 document에 위임
    continuousScrolling: true, // 연속 스크롤링 활성화
    alwaysShowTracks: false, // 스크롤 트랙을 항상 보이게 할지 여부
  });

  // #container 요소에 대한 ScrollTrigger 프록시 설정
  ScrollTrigger.scrollerProxy('#container', {
    scrollTop(value) {
      // value가 주어진 경우, container의 scrollTop을 value로 설정
      if (arguments.length) {
        container.scrollTop = value;
      }

      // container의 scrollTop을 반환
      return container.scrollTop;
    },
  });

  // ScrollTrigger 업데이트 이벤트 리스너를 container에 추가
  container.addListener(ScrollTrigger.update);
  // ScrollTrigger의 기본 scroller를 stage로 설정
  ScrollTrigger.defaults({ scroller: stage });

  // container의 위치를 (0, 0)으로 설정
  // container.setPosition(0, 0);
  // container의 x축 트랙 요소를 제거
  container.track.xAxis.element.remove();

  // .startPoint 요소를 클릭하면 container를 (0, 0) 위치로 스크롤
  $('.startPoint').click(function () {
    container.scrollTo(0, 0, 600, {
      callback: () => console.log('done!'), // 스크롤 완료 후 콜백 함수
      easing: easing.easeInOutCirc, // 스크롤 이징 함수
    });
  });

  // 즉시 실행 함수
  (function () {
    let v = 0;

    // .scroll-content 요소에 대한 gsap 애니메이션 설정
    gsap.to('.scroll-content', {
      scrollTrigger: {
        trigger: '.scroll-content', // 트리거 요소
        start: 'top top', // 시작 위치
        end: 'bottom bottom', // 종료 위치
        scrub: true, // 스크럽 활성화
        onUpdate: (self) => {
          // 업데이트 이벤트 핸들러
          // 현재는 주석 처리되어 있음
        },
      },
    });
  })();

  // gsap-marker-scroller-start 클래스를 가진 요소가 있을 경우
  if (document.querySelector('.gsap-marker-scroller-start')) {
    // gsap-marker 클래스를 포함하는 모든 요소를 배열로 변환
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');

    // container에 offset 변경 이벤트 리스너를 추가
    container.addListener(({ offset }) => {
      // 마커의 marginTop을 -offset.y로 설정
      gsap.set(markers, { marginTop: -offset.y });
      // .posNum 요소의 내용을 offset.y로 설정
      $('.posNum').html(offset.y);
    });
  }
});
