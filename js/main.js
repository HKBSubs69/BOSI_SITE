function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.getElementById("year").innerText = new Date().getFullYear();
