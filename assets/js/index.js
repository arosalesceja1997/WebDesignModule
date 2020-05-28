let db = "";
let newDato = "";
let datos = [];

let thisurl = {
  url: "",
};

let resp = {};
let newUrl = "https://rel.ink/";

$(document).ready(function () {
  db = JSON.parse(localStorage.getItem("data"));
  if (db === null) {
    datos = [];
  } else {
    datos = db;
    newD(datos);
  }

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
});

function newD(datos, x = 0) {
  let i;
  for (x === 0 ? (i = 0) : (i = x); i < datos.length; i++) {
    document.getElementById("addL").innerHTML +=
      "<div class='bc-link'>" +
      "<div>" +
      "<a href='" +
      datos[i].Link +
      "'>Link 1: " +
      datos[i].Link +
      "</a>" +
      "<div>" +
      "<a href='" +
      datos[i].Acortado +
      "'>Link 2: " +
      datos[i].Acortado +
      "</a>" +
      "</div>";
    "</div>" + "</div>";
  }
}

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
        let x = "" + newUrl + response.hashid;
        alert("Tu url arcortada: \n" + x);
        addLink(acortar, x);
      }
    });
}

function addLink(link, acortado) {
  datos.push({
    Link: link,
    Acortado: acortado,
  });
  localStorage.setItem("data", JSON.stringify(datos));
  newD(datos, datos.length - 1);
}

if (document.getElementById("btnModal")) {
  var modal = document.getElementById("tvesModal");
  var btn = document.getElementById("btnModal");
  var span = document.getElementsByClassName("close")[0];
  var body = document.getElementsByTagName("body")[0];

  btn.onclick = function () {
    modal.style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  };

  span.onclick = function () {
    modal.style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";

      body.style.position = "inherit";
      body.style.height = "auto";
      body.style.overflow = "visible";
    }
  };
}
