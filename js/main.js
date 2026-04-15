/* MENU */
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

/* YEAR */
document.getElementById("year").innerText = new Date().getFullYear();

/* SCROLL REVEAL */
window.addEventListener("scroll", function () {
  document.querySelectorAll(".card").forEach(function (card) {
    var top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});

/* MOUSE GLOW */
var glow = document.createElement("div");
glow.className = "glow";
document.body.appendChild(glow);

document.addEventListener("mousemove", function (e) {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
