let toggler = document.querySelector(".toggler");
let toggleBar = document.querySelector(".menu ul");

toggler.addEventListener("click", () => {
    toggleBar.classList.toggle("hidden");
})