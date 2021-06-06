var toggle = document.getElementById("toggle")


function menuToggle() {
  var bar = document.getElementById("bar");
  var x = document.getElementById("exit");
  var ul = document.getElementById("nav");
  // var intro = document.getElementById("intro");
  if (bar.style.display === "block") {
    bar.style.display = "none";
    x.style.display = "block";
    nav.style.display = "block";
    // intro.style.color = "red";
  } else {
    bar.style.display = "block";
    x.style.display = "none";
    nav.style.display = "none";
  }
  

}

toggle.addEventListener("click", menuToggle, false);

