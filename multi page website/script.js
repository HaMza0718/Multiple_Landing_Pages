let humberger = document.getElementById("humberger");

humberger.addEventListener("click", () => {
  let navbar = document.getElementById("nav");

  if (navbar.style.display == "block") {
    humberger.innerHTML = "";
    humberger.innerHTML = `<i class="fas fa-bars"></i>`;
    navbar.style.display = "none";
  } else {
    humberger.innerHTML = "";
    humberger.innerHTML = `<i class="fas fa-times"></i>`;
    navbar.style.display = "block";
  }
});
