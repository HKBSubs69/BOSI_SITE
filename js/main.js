function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.getElementById("year").innerText = new Date().getFullYear();

window.addEventListener("scroll", function () {
  document.querySelectorAll(".card").forEach(function (card) {
    var top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.classList.add("show");
    }
  });
});
