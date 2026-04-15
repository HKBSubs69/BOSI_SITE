document.getElementById("year").innerText = new Date().getFullYear();

// SIDEBAR
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
}

// SCROLL + REVERSE ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 80) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
});

// PARALLAX EFFECT
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  document.querySelector(".bg-gradient").style.transform =
    "translateY(" + y * 0.1 + "px)";
});
