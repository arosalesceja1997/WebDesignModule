$(document).ready(function () {
  $(".btn-menu").click(function () {
    $(".nav-bar .menu").slideToggle();
  });

  $(window).resize(function () {
    if ($(document).width() > 1 && $(document).width() < 900) {
      // || $(document).width() < 450
      //   $(".nav-bar .menu").css({ display: "block" });
      $(".menu").css({ display: "none" });
    }
  });

  let prevH = $("#bc-container").height();
  let bclinea = $("#bc-by-linea").css("height", prevH);
  // $("#bc-container").attrchange({
  //   callback: function (e) {
  //     let curH = $(this).height();
  //     if (prevH !== curH) {
  //       bclinea = curH;
  //     }
  //   },
  // });
});

let thisurl = {
  url: "",
};

let resp = {};
let newUrl = "https://rel.ink/";

function mostrar(acortar) {
  thisurl.url = acortar;
  var url = "https://rel.ink/api/links/";

  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(thisurl), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error("Error:", typeof error);
      console.error("Error:", error);
    })
    .then((response) => {
      if (typeof response.hashid === "undefined") {
        alert("Ingresa una url valida");
      } else {
        alert("Tu url arcortada: \n" + newUrl + response.hashid);
      }
      document.getElementById("x-shorten").value = "" + ewUrl + response.hashid;
      // console.info("Success:", typeof response.hashid);
      // console.info("Success:", response);
    });
}
