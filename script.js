document.addEventListener('scroll', ()=>{
  const navbar = document.querySelector('.navbar');
  if(window.scrollY === 0){
    navbar.classList.remove('scrolled');
  }
  else{
    navbar.classList.add('scrolled');
  }
});



// Zoomable image modal logic=======
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal .close");

document.querySelectorAll(".image-container img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
// -----------------------------------------------


// signup form============================
const logButton = document.getElementById("signin-icon");
const logform = document.getElementById("signup-form");
const carouselPage = document.getElementById("carouselExample");
const Navbar = document.getElementById("navbar-container");
const bodyElement = document.body;
const form = document.getElementById("my-form");
const userInput = document.getElementById("username");
const mail = document.getElementById("email");
const pass = document.getElementById("password");

let isSignedup = false;
let setformTime; 


// Show form after delay (only if not signed up)
document.addEventListener("DOMContentLoaded", () => {
  setformTime = setTimeout(() => {
    if (!isSignedup) {
      showSignupForm();
    }
  }, 30000);
});

// Click on sign-in icon
logButton.addEventListener("click", () => {
  if (!isSignedup) {
    showSignupForm();
  } else {
    const confirmLogout = confirm("Do you want to log out?");
    if (confirmLogout) {
      logoutUser();
    }
  }
});

// Close button action
document.querySelector(".btn-close").addEventListener("click", () => {
  hideSignupForm();
});

// Signup form submission and validation
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = userInput.value.trim();
  const email = mail.value.trim();
  const password = pass.value.trim();

  if (username === "" || email === "" || password === "") {
    alert("All fields are required!");
    return;
  }

  const usernameRegex = /^[A-Za-z\s]+$/;
  if (!usernameRegex.test(username)) {
    alert("Username must contain only letters and spaces.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  generateInitials();
  alert("✅Sign-in successful!");

  form.reset();
  hideSignupForm();

  isSignedup = true; 
  clearTimeout(setformTime);
});

function showSignupForm() {
  logform.style.display = "block";
  logform.style.position = "fixed";
  logform.style.top = "50%";
  logform.style.left = "50%";
  logform.style.transform = "translate(-50%, -50%)";
  logform.style.zIndex = "9999";

  document.body.classList.add("no-scroll");
  carouselPage.classList.add("blur");
  Navbar.classList.add("blur");
  welcome.classList.add("blur");

  // Collapse mobile navbar if open
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarCollapse && navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
}

// Hide signup form function
function hideSignupForm() {
  logform.style.display = "none";
  document.body.classList.remove("no-scroll");
  carouselPage.classList.remove("blur");
  Navbar.classList.remove("blur");
  welcome.classList.remove("blur");
}

// Generate Initials
function generateInitials() {
  const name = userInput.value
    .split(" ")
    .map((word) => word.charAt(0)?.toUpperCase() || " ")
    .join("");
  logButton.innerHTML = `${name} <i class="fa-solid fa-user fa-sm"></i>`;
  logButton.style.border = "2px solid black";
  logButton.setAttribute("title", "Sign out");
}
// --------------------------------

// user logout ========================
function logoutUser() {
  isSignedup = false;
  let username ="";
  logButton.innerHTML = `Sign Up <i class="fa-solid fa-user"></i>`;
  logButton.style.border = "none";
  alert("✅Logged out successfully!");
}
