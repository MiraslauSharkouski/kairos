const burger = document.getElementById("burger");
const headerLinks = document.querySelector(".header_links");

burger?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  burger.classList.toggle("is-active");
  headerLinks?.classList.toggle("is-active");
  document.body.classList.toggle("no-scroll");
});

document.querySelectorAll(".header_links nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    burger?.classList.remove("is-active");
    headerLinks?.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
  });
});
