// Burder menu
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

//Registration form
// Tab switching functionality
const tabs = document.querySelectorAll(".tab");
const formSections = document.querySelectorAll(".form-section");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    tab.classList.add("active");

    // Hide all form sections
    formSections.forEach((section) => section.classList.remove("active"));

    // Show corresponding form section
    const tabName = tab.getAttribute("data-tab");
    document.getElementById(tabName).classList.add("active");
  });
});

// Create account button
document.querySelector(".create-btn").addEventListener("click", () => {
  alert("Create account functionality would go here");
});

// Google button
document.querySelector(".google-btn").addEventListener("click", () => {
  alert("Google sign-in would go here");
});

// Email form submission
document.querySelector(".submit-btn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  if (email) {
    alert("Email submitted: " + email);
  } else {
    alert("Please enter an email");
  }
});
