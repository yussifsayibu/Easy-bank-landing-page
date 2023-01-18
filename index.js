
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".nav-links");

toggleButton.addEventListener("click", () => {
    toggleButton.classList.toggle("active");
    navbarLinks.classList.toggle("active");
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () =>{
    toggleButton.classList.remove("active");
    navbarLinks.classList.remove("active");
}))