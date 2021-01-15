// const app = {};

mobileNav = function () {
  const hamburger = document.querySelector('.hamburger');
  const topLine = document.querySelector('.hamburger span:nth-of-type(1)');
  const middleLine = document.querySelector('.hamburger span:nth-of-type(2)');
  const bottomLine = document.querySelector('.hamburger span:nth-of-type(3)');


  // toggle the nav class and transform the hamburger
  hamburger.addEventListener('click', function () {
    console.log('hi');
    topLine.classList.toggle('line1');
    middleLine.classList.toggle('line2');
    bottomLine.classList.toggle('line3');
  });
};

mobileNav();