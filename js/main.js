'use strict';

 
// 太陽と月が切り替わる
 /* IDの取得 */
const sunOne = document.getElementById("sun1");
const sunTwo = document.getElementById("sun2");
const moonOne = document.getElementById("moon1");
const moonTwo = document.getElementById("moon2");




function scrollFunction() {
  //window での縦スクロール量を、変this_yとする
  let this_y = window.pageYOffset;
  // 高さ6500より小さいとき
  if (this_y <= 3500) {
    // moonを非表示
    moonOne.style.opacity = '0';
    moonTwo.style.opacity = '0';
    sunOne.style.opacity = '100';
    sunTwo.style.opacity = '100';
  } else {
    // sunを非表示
    sunOne.style.opacity = '0';
    sunTwo.style.opacity = '0';
    moonOne.style.opacity = '100';
    moonTwo.style.opacity = '100';
  }
}

window.onload = function () {
  scrollFunction()
}
window.onscroll = function () {
  scrollFunction();
}











var scrollAnimationElm = document.querySelectorAll('.sa');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {

    //その要素が画面の下から200px上に上がって来たら表示する
    var triggerMargin = 200;
    
    if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
      scrollAnimationElm[i].classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);
