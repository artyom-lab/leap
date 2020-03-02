$(document).ready(function () {

  AOS.init({
    duration: 1200,
  });

  Waves.attach('.btn, .btn-a', ['waves-light']);
  Waves.init();

  $('[data-toggle="tooltip"]').tooltip();

});