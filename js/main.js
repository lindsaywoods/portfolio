'use strict';

$(document).ready(function () {

  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 200);
    return false;
  });
});