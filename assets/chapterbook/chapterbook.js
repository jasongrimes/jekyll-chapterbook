
$(function() {
  /*
  $('.book').on('click', '.btn-close-sidebar', function() {
    $('.book').removeClass('with-summary');
  });
  $('.book').on('click', '.btn-open-sidebar', function() {
    $('.book').addClass('with-summary');
  });
  $('.book').on('click', '.btn-toggle-sidebar', function() {
    $('.book').toggleClass('with-summary');
  });
  */
  // Close sidebar when clicking outside of it on mobile.
  $('body').on('click', '.book.with-summary .body-inner, .book.with-summary .page-footer', function() {
    if ($(document).width() <= 600) {
      $('.book').removeClass('with-summary');
    }

  });
});