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

// Learn More popup
const learnMoreBtn = document.querySelector(".learn_more_btn");
const popupOverlay = document.getElementById("learnMorePopup");
const popupClose = document.getElementById("popupClose");

learnMoreBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  popupOverlay?.classList.add("active");
  document.body.classList.add("no-scroll");
});

popupClose?.addEventListener("click", () => {
  popupOverlay?.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

popupOverlay?.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

// Video popup
const videoPopupBtn = document.querySelector(".play_video_btn");
const videoPopupOverlay = document.getElementById("videoPopup");
const videoPopupClose = document.getElementById("videoPopupClose");
const popupVideo = document.querySelector(".popup-video");

videoPopupBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  videoPopupOverlay?.classList.add("active");
  document.body.classList.add("no-scroll");
});

videoPopupClose?.addEventListener("click", () => {
  videoPopupOverlay?.classList.remove("active");
  document.body.classList.remove("no-scroll");
  if (popupVideo) {
    popupVideo.pause();
  }
});

videoPopupOverlay?.addEventListener("click", (e) => {
  if (e.target === videoPopupOverlay) {
    videoPopupOverlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
    if (popupVideo) {
      popupVideo.pause();
    }
  }
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
document.querySelector(".create-btn")?.addEventListener("click", () => {
  alert("Create account functionality would go here");
});

// Google OAuth2
const googleBtn = document.getElementById("googleAuthBtn");
let googleTokenClient = null;

function initGoogleOAuth() {
  if (!window.google?.accounts?.oauth2) return;

  googleTokenClient = window.google.accounts.oauth2.initTokenClient({
    client_id:
      "1094833636193-m338iot1kk68ps0gppngtsulvs4jllej.apps.googleusercontent.com",
    scope: "openid profile email",
    callback: async (tokenResponse) => {
      if (tokenResponse.error) {
        console.error("Google OAuth error:", tokenResponse.error);
        return;
      }

      try {
        const userRes = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          },
        );

        const userData = await userRes.json();
        console.log("Google user:", userData);
        alert(`Welcome, ${userData.name}! (${userData.email})`);
      } catch (err) {
        console.error("Failed to fetch user info:", err);
      }
    },
  });
}

googleBtn?.addEventListener("click", () => {
  if (!googleTokenClient) {
    initGoogleOAuth();
  }

  if (googleTokenClient) {
    googleTokenClient.requestAccessToken();
  } else {
    alert("Google OAuth is not loaded yet. Please try again.");
  }
});

// Email form submission
document.querySelector(".submit-btn")?.addEventListener("click", () => {
  const email = document.getElementById("emailInput")?.value;
  if (email) {
    alert("Email submitted: " + email);
  } else {
    alert("Please enter an email");
  }
});
