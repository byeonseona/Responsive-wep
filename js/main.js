/* li */
$('header nav > ul > li').hover(
  function () {
    $(this).find('.sub-menu').stop().slideDown();
  },
  function () {
    $(this).find('.sub-menu').stop().slideUp();
  }
);



/* 사이드바 */
const close = document.querySelector('.close');
const sider = document.querySelector('.sidebar');

function show() {
  sider.classList.add('active');
  close.style.display = 'inline';
  
}

function closes() {
  sider.classList.remove('active');
  close.style.display = 'none';
}

// close.addEventListener('click', () => {
//   close.style.display = 'none';
//   document.querySelector('.sidebar').classList.remove('active');
// });

/* 메인슬라이드 */
new Swiper('.slide .swiper', {
  direction: 'horizontal',
  slidesPerView: 1, //한 번에 보여줄 슬라이드 개수
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.slide .swiper-prev', // 이전 버튼 선택자
    nextEl: '.slide .swiper-next', // 다음 버튼 선택자
  },
});

// ---- ---- Const ---- ---- //
let inputBox = document.querySelector('.input-box'),
  searchIcon = document.querySelector('.search'),
  closeIcon = document.querySelector('.close-icon');

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener('click', () => {
  inputBox.classList.add('open');
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener('click', () => {
  inputBox.classList.remove('open');
});


/* 모바일햄버거 */
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  }else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});


//둥둥떠다니는 효과
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //몇번 반복할지  설정, -1은 무한반복
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut, //gsap easing
    delay: random(0, delay),
  });
}
floatingObject('.left',1,20);
floatingObject('.right',0.5,15);
floatingObject('.Elemental-logo',0.5,15);
floatingObject('.elementalimg',0.5,15);
floatingObject('.snowwhite',0.4,15);
floatingObject('.insideout',0.4,15);
floatingObject('.mufasa',0.4,15);

/* 스크롤매직 */
// Scroll Magic-----------------------------------
const spyEl = document.querySelectorAll('section.scroll-spy');
spyEl.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement : spyEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  //show넣었다가 뺐다가
  //.setClassToggle(토글할요소, '넣었다뺄 class이름')
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


//더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  console.log(hide);
  const first = Array.from(hide).slice(0, 2); //한줄에 4개씩 보이게
  first.forEach(item => {
    item.classList.remove('hide');
  });
  if(hide.length <= 2){
    hideMoreButton();
  }
}

//보일내용이 끝나면 더보기 버튼 숨기기
function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}
