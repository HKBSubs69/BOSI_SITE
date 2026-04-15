function toggleMenu(){
const menu = document.getElementById("mobileMenu");
menu.classList.toggle("active");
}

document.getElementById("year").innerText = new Date().getFullYear();
