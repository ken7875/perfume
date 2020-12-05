"use strict";

console.log('Hello!');
$(document).ready(function () {
  // logIn登入按鈕
  (function () {
    if (location.href.split('/')[3] === 'logIn.html') {
      var submit = document.querySelector('.logInBtn');
      submit.addEventListener('click', function () {
        location.href = '/account.html';
      });
    }
  })();
});
//# sourceMappingURL=all.js.map
