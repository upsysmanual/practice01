// PC 버전의 메뉴버튼의 동작

let gnbListLink = document.querySelectorAll(".gnb-list-link");
let gnbDepth2 = document.querySelectorAll(".gnb-depth2");
let gnb = document.querySelector(".gnb");
let gnbListItem = document.querySelectorAll(".gnb-list-item");

for (let i = 0; i < gnbListLink.length; i++) {
  gnbListLink[i].addEventListener("mouseenter", function () {
    gnbDepth2[i].classList.add("active");
  });

  gnbListItem[i].addEventListener("mouseleave", function () {
    gnbDepth2[i].classList.remove("active");
  });
  // gnb.addEventListener("mouseleave", function () {
  //   gnbDepth2[i].classList.remove("active");
  // });
}

//모바일 버전의 hamburger 버튼의 동작//

let hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", function () {
  gnb.classList.toggle("active");
});

// 일정시간마다 반복실행하는 경우, window.setInterval (함수, 시간) 함수 사용
// 일정시간 이후 한번 실행하는 경우, window.setTimeout (함수, 시간) 함수 사용
//매개변수로 사용하는 시간의 단위는 1/1000 초

let mainSloganItem = document.querySelectorAll ('.main-slogan-item');
let current = 0;
let next = 1;
let prev = 2;
window.setInterval(function () {
if (next >= mainSloganItem.length) {
  next=0;
}
  mainSloganItem[current].classList.remove('next','current','prev');
  mainSloganItem[next].classList.remove('next','current','prev');
  mainSloganItem[prev].classList.remove('next','current','prev');

  mainSloganItem[current].classList.add('current');
  mainSloganItem[next].classList.add('next');
  mainSloganItem[prev].classList.add('prev');

  prev = current;
  current = next;
  next = next+1;
}, 3000);
