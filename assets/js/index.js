$(document).ready(function () {
  $(".btn-menu").click(function () {
    $(".nav-bar .menu").slideToggle();
  });

  $(window).resize(function () {
    if ($(document).width() > 1) {
      // || $(document).width() < 450
      //   $(".nav-bar .menu").css({ display: "block" });
      $(".menu").css({ display: "none" });
    }
  });

  let prevH = $("#bc-container").height();
  let bclinea = $("#bc-by-linea").css("height", prevH);
  $("#bc-container").attrchange({
    callback: function (e) {
      let curH = $(this).height();
      if (prevH !== curH) {
        bclinea = curH;
      }
    },
  });
});
