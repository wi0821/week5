$(document).ready(function() {
  $('#bottom-Reply-Btn').click(function (e) {
        e.preventDefault();
        $('#assignment-Comment').toggleClass('d-none');
        $('#assignment-Bottom').toggleClass('d-none');
        $('#assignment-Reply').removeClass('d-none');
     });
    $('#assignment-Reply-Btn,#assignment-Cancel-Btn').click(function (e) {
        e.preventDefault();
        $('#assignment-Comment').removeClass('d-none');
        $('#assignment-Bottom').removeClass('d-none');
        $('#assignment-Reply').toggleClass('d-none');
     });
    $('.iconExpand').click(function (e) {
        // e.preventDefault();
        $('.iconExpand').toggleClass('active');
    });
});