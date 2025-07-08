const navbar = document.getElementsByClassName("navbar")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "#007BFF";
    navbar.style.color = "#fff";
  } else {
    navbar.style.backgroundColor = "rgba(255,255,255,0.95)";
    navbar.style.color = "#333";
  }
});

const navItems = document.getElementsByClassName("navitems");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("mouseover", () => {
    navItems[i].style.color = "grey";
  });

  navItems[i].addEventListener("mouseout", () => {
    navItems[i].style.color = window.scrollY > 0 ? "#fff" : "#333";
  });
}

const buton = document.getElementById("buton");

buton.addEventListener("click", () => {
  buton.firstElementChild.style.backgroundColor = "#28a745";
  buton.firstElementChild.style.color = "white";
});
